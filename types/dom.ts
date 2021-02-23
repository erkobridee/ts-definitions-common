import { TFunction } from './functions';

export type TDOMElement = HTMLElement | Document | Window;

export type TDOMEventHandler<EventType extends Event = Event> = TFunction<
  [EventType],
  void
>;
