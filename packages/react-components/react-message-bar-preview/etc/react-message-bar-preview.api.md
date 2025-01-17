## API Report File for "@fluentui/react-message-bar-preview"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const MessageBar: ForwardRefComponent<MessageBarProps>;

// @public
export const MessageBarActions: ForwardRefComponent<MessageBarActionsProps>;

// @public (undocumented)
export const messageBarActionsClassNames: SlotClassNames<MessageBarActionsSlots>;

// @public
export type MessageBarActionsProps = ComponentProps<MessageBarActionsSlots>;

// @public (undocumented)
export type MessageBarActionsSlots = {
    root: Slot<'div'>;
    containerAction?: Slot<'div'>;
};

// @public
export type MessageBarActionsState = ComponentState<MessageBarActionsSlots> & Pick<Required<MessageBarContextValue>, 'layout'>;

// @public
export const MessageBarBody: ForwardRefComponent<MessageBarBodyProps>;

// @public (undocumented)
export const messageBarBodyClassNames: SlotClassNames<MessageBarBodySlots>;

// @public
export type MessageBarBodyProps = ComponentProps<MessageBarBodySlots>;

// @public (undocumented)
export type MessageBarBodySlots = {
    root: Slot<'div'>;
};

// @public
export type MessageBarBodyState = ComponentState<MessageBarBodySlots>;

// @public (undocumented)
export const messageBarClassNames: SlotClassNames<MessageBarSlots>;

// @public (undocumented)
export const MessageBarContextProvider: React_2.Provider<MessageBarContextValue | undefined>;

// @public (undocumented)
export type MessageBarContextValue = {
    layout?: 'multiline' | 'singleline' | 'auto';
};

// @public
export type MessageBarProps = ComponentProps<MessageBarSlots> & Pick<MessageBarContextValue, 'layout'> & {
    intent?: 'info' | 'success' | 'warning' | 'error';
};

// @public (undocumented)
export type MessageBarSlots = {
    root: Slot<'div'>;
    icon?: Slot<'div'>;
};

// @public
export type MessageBarState = ComponentState<MessageBarSlots> & Required<Pick<MessageBarProps, 'layout' | 'intent'>>;

// @public
export const MessageBarTitle: ForwardRefComponent<MessageBarTitleProps>;

// @public (undocumented)
export const messageBarTitleClassNames: SlotClassNames<MessageBarTitleSlots>;

// @public
export type MessageBarTitleProps = ComponentProps<MessageBarTitleSlots>;

// @public (undocumented)
export type MessageBarTitleSlots = {
    root: Slot<'span'>;
};

// @public
export type MessageBarTitleState = ComponentState<MessageBarTitleSlots>;

// @public
export const renderMessageBar_unstable: (state: MessageBarState, contexts: MessageBarContextValues) => JSX.Element;

// @public
export const renderMessageBarActions_unstable: (state: MessageBarActionsState) => JSX.Element;

// @public
export const renderMessageBarBody_unstable: (state: MessageBarBodyState) => JSX.Element;

// @public
export const renderMessageBarTitle_unstable: (state: MessageBarTitleState) => JSX.Element;

// @public
export const useMessageBar_unstable: (props: MessageBarProps, ref: React_2.Ref<HTMLElement>) => MessageBarState;

// @public
export const useMessageBarActions_unstable: (props: MessageBarActionsProps, ref: React_2.Ref<HTMLElement>) => MessageBarActionsState;

// @public
export const useMessageBarActionsStyles_unstable: (state: MessageBarActionsState) => MessageBarActionsState;

// @public
export const useMessageBarBody_unstable: (props: MessageBarBodyProps, ref: React_2.Ref<HTMLElement>) => MessageBarBodyState;

// @public
export const useMessageBarBodyStyles_unstable: (state: MessageBarBodyState) => MessageBarBodyState;

// @public (undocumented)
export const useMessageBarContext: () => MessageBarContextValue;

// @public
export const useMessageBarStyles_unstable: (state: MessageBarState) => MessageBarState;

// @public
export const useMessageBarTitle_unstable: (props: MessageBarTitleProps, ref: React_2.Ref<HTMLElement>) => MessageBarTitleState;

// @public
export const useMessageBarTitleStyles_unstable: (state: MessageBarTitleState) => MessageBarTitleState;

// (No @packageDocumentation comment for this package)

```
