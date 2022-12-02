// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  baseBadge: {
    alignItems: 'center',
    borderRadius: '4px',
    display: 'flex',
    fontFamily: 'inherit',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    maxWidth: 'initial',
    paddingInlineEnd: '8px',
    paddingInlineStart: '8px',
    textTransform: 'uppercase',
    transition: 'initial',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },
  badgeIcon: {
    display: 'flex',
    marginRight: '4px',
  },
  filledBadge: {
    composes: 'baseBadge',
    backgroundColor: 'var(--ps-surface-medium)',
    color: 'var(--ps-text)',
  },
  outlineBadge: {
    backgroundColor: 'transparent',
    border: '1px solid var(--ps-text)',
    color: 'var(--ps-text)',
  },
  defaultBadge: {
    composes: 'filledBadge',
  },
  actionBadge: {
    composes: 'filledBadge',
    backgroundColor: 'var(--ps-action-background)',
    color: 'var(--ps-action-text)',
  },
  xsBadge: {
    fontSize: '0.625rem',
    paddingBottom: '1.5px',
    paddingTop: '1.5px',
  },
  sBadge: {
    fontSize: '0.75rem',
    paddingBottom: '3px',
    paddingTop: '3px',
  },
}
