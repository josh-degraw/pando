// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  actionIconButton: {
    backgroundColor: 'var(--ps-action-background)',
    color: 'var(--ps-action-text)',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-action-background-hover)',
    },
    "&:active:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-action-background-active)',
    },
  },
  defaultIconButton: {
    backgroundColor: 'var(--ps-background)',
    color: 'var(--ps-text)',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-background-hover)',
    },
    "&:active:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  squareIconButton: {
    borderRadius: '6px',
  },
  roundIconButton: {
    borderRadius: '50%',
  },
  textIconButton: {
    backgroundColor: 'transparent',
    color: 'var(--ps-action-text-inverse)',
    transition: 'transform 150ms ease-in-out',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'transparent',
    },
  },
  mIconButton: {
    height: '2rem',
    minWidth: 'initial',
    width: '2rem',
  },
  lIconButton: {
    height: '3rem',
    minWidth: 'initial',
    width: '3rem',
  },
}
