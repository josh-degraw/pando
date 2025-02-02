import type { FieldStates } from '../components/types'
import type {
  NestedGeneratedStyles,
  NestedStyleValue,
  RenderedGeneratedStyles,
  Syntax,
} from './types'

function formatCSSPropName(propName: string) {
  if (propName.includes('&')) {
    return propName
  }

  return `${kebabCase(propName)}:`
}

function kebabCase(input: string) {
  const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g

  return input.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase()
  })
}

function transformValue(style: NestedStyleValue) {
  if (typeof style === 'string') {
    return `${style.trim()};`
  }

  const psuedoStyles = Object.entries(style).reduce(
    (prev, [current, currentValue]) => {
      return `
      ${prev.trim()}
      ${kebabCase(current)}: ${currentValue};
    `
    },
    ``
  )

  return `{${psuedoStyles}}`
}

// Public

export function createA11yProps(options: FieldStates) {
  const { disabled, invalid, required, readOnly } = options

  return {
    ['aria-invalid']: invalid,
    ['data-invalid']: invalid,
    ['data-readonly']: readOnly,
    ['data-required']: required,
    disabled,
    readOnly,
    required,
  }
}

export function createClassNameProp(...classNames: string[]) {
  return { className: classNames.join(' ') }
}

export function createJSProps<T extends NestedGeneratedStyles>(styles: T) {
  return {
    cssProps: transformStyles(styles),
    styles: styles as RenderedGeneratedStyles<T>,
  }
}

export function transformCasing(jsxProp: string, syntax: Syntax) {
  return syntax === 'html' ? kebabCase(jsxProp) : jsxProp
}

export function transformStyles(styleObject: NestedGeneratedStyles) {
  return Object.entries(styleObject)
    .reduce((prev, [currentKey, currentValue]) => {
      const propName = formatCSSPropName(currentKey)

      return `
      ${prev.trim()}
      ${propName} ${transformValue(currentValue)}
    `
    }, '')
    .trim()
    .replace(/^ {2,12}/gm, '') as unknown as TemplateStringsArray
}
