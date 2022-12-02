// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  keyframesFadeIn: {
    '@keyframes fadeIn': {
      from: {
        opacity: '0',
      },
      to: {
        opacity: '1',
      },
    },
  },
  tooltipWrapper: {
    display: 'inline-block',
    position: 'relative',
    "&:hover > [data-tooltip]:not([data-disabled='true'])": {
      display: 'inline-block',
    },
    "&:focus-within > [data-tooltip]:not([data-disabled='true'])": {
      display: 'inline-block',
    },
  },
  tooltipBase: {
    animationDuration: '150ms',
    animationFillMode: 'forwards',
    animationName: 'fadeIn',
    animationTimingFunction: 'ease-in-out',
    display: 'none',
    opacity: '0',
    position: 'absolute',
  },
  tooltip: {
    composes: 'tooltipBase',
    animationDelay: '500ms',
    filter: 'drop-shadow(0 0 6px rgb(0 0 0 / 50%))',
    fontSize: '0.75rem',
    fontVariationSettings: "'wght' 400",
    fontWeight: '400',
    lineHeight: '1.25',
    minWidth: '10em',
    zIndex: '1700',
    "&:not([data-disabled='true']):hover": {
      display: 'inline-block',
    },
  },
  tooltipContentBase: {
    position: 'relative',
    '&::after': {
      content: "''",
      display: 'block',
      height: '1em',
      position: 'absolute',
      width: '1em',
    },
  },
  tooltipContent: {
    composes: 'tooltipContentBase',
    backgroundColor: 'var(--ps-surface-inverse)',
    borderRadius: '4px',
    color: 'var(--ps-text-inverse)',
    padding: '0.5rem',
    textAlign: 'start',
    '&::after': {
      backgroundColor: 'var(--ps-surface-inverse)',
      fontSize: '0.71em',
    },
  },
  tooltipTrigger: {
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
}
