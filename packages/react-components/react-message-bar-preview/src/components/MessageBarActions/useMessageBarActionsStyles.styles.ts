import { makeResetStyles, makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { tokens } from '@fluentui/react-theme';
import type { MessageBarActionsSlots, MessageBarActionsState } from './MessageBarActions.types';

export const messageBarActionsClassNames: SlotClassNames<MessageBarActionsSlots> = {
  root: 'fui-MessageBarActions',
  containerAction: 'fui-MessageBarActions__containerAction',
};

/**
 * Styles for the root slot
 */
const useRootBaseStyles = makeResetStyles({
  ...shorthands.gridArea('secondaryActions'),
  display: 'flex',
  columnGap: tokens.spacingHorizontalM,
  marginRight: tokens.spacingHorizontalM,
});

const useContainerActionBaseStyles = makeResetStyles({
  ...shorthands.gridArea('actions'),
});

const useMultilineStyles = makeStyles({
  root: {
    justifyContent: 'end',
    marginTop: tokens.spacingVerticalMNudge,
    marginBottom: tokens.spacingVerticalS,
    marginRight: '0px',
  },
});

/**
 * Apply styling to the MessageBarActions slots based on the state
 */
export const useMessageBarActionsStyles_unstable = (state: MessageBarActionsState): MessageBarActionsState => {
  const rootBaseStyles = useRootBaseStyles();
  const containerActionBaseStyles = useContainerActionBaseStyles();
  const multilineStyles = useMultilineStyles();
  state.root.className = mergeClasses(
    messageBarActionsClassNames.root,
    rootBaseStyles,
    state.layout === 'multiline' && multilineStyles.root,
    state.root.className,
  );

  if (state.containerAction) {
    state.containerAction.className = mergeClasses(
      messageBarActionsClassNames.containerAction,
      containerActionBaseStyles,
      state.containerAction.className,
    );
  }

  return state;
};
