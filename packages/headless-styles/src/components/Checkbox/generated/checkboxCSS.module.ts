// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  checkboxContainer: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    position: 'relative',
    verticalAlign: 'top',
    '&[disabled]': {
      cursor: 'not-allowed',
    },
    "&[data-readonly='true']": {
      cursor: 'not-allowed',
    },
  },
  checkboxInput: {
    border: '0',
    boxSizing: 'border-box',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    '&:focus + .checkboxControl': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible) + .checkboxControl': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  checkboxControl: {
    alignItems: 'center',
    borderColor: 'var(--ps-action-border)',
    borderImage: 'initial',
    borderRadius: '2px',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: 'var(--ps-action-text)',
    display: 'inline-flex',
    flexShrink: '0',
    height: '1.125rem',
    justifyContent: 'center',
    marginBottom: '2px',
    marginInlineEnd: '0.437rem',
    transitionDuration: '150ms',
    transitionProperty: 'background, background-color, border, box-shadow',
    userSelect: 'none',
    verticalAlign: 'top',
    width: '1.125rem',
    '&:not([disabled]):hover': {
      background: 'var(--ps-background-hover)',
      borderColor: 'var(--ps-background-hover)',
    },
    "&[data-checked='true']": {
      background: 'var(--ps-action-background)',
      borderColor: 'var(--ps-action-background)',
    },
    '&[disabled]': {
      background: 'var(--ps-background)',
      borderColor: 'var(--ps-background)',
    },
    "&[data-invalid='true']": {
      background: 'var(--ps-danger-surface)',
      borderColor: 'var(--ps-danger-surface)',
      color: 'var(--ps-danger-text)',
    },
  },
  checkboxControl_data_checked__true: {
    '&:hover': {
      background: 'var(--ps-action-background-hover)',
      borderColor: 'var(--ps-action-background-hover)',
    },
  },
  checkboxControl_data_invalid__true: {
    '&:hover': {
      background: 'var(--ps-danger-surface)',
      borderColor: 'var(--ps-danger-surface)',
    },
  },
  checkboxControl_data_readonly__true: {
    '&:hover': {
      backgroundColor: 'initial',
    },
  },
}
