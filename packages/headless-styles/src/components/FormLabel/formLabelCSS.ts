import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import styles from './formLabelCSS.module.css'
import { FormLabelOptions } from './types'

const FORM_LABEL = 'ps-form-label'

export function getFormLabelProps(options?: FormLabelOptions) {
  const { htmlFor, size, tech, value, ...defaultOptions } =
    getDefaultFormLabelOptions(options)
  const sizeClass = `${size}Label`
  const label = getFormValue(value, defaultOptions.required)

  if (tech === 'svelte') {
    return {
      for: htmlFor,
      ...label,
      ...createSvelteObj(`${FORM_LABEL} formLabelBase ${size}Label`),
    }
  }

  return {
    htmlFor,
    ...label,
    ...createCSSObj(`${FORM_LABEL} ${styles[sizeClass]}`),
  }
}