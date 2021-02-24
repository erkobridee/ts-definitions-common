import { TFunction } from './functions';

export type TDOMElement = HTMLElement | Document | Window;

/**
 * function type that will be assigned to an event listerner of any DOM element
 *
 * @example
 * ```
 * const clickHandler: TDOMEventHandler = (event) => console.log(event);
 *
 * window.addEventListener('click', clickHandler);
 * ```
 */
export type TDOMEventHandler<EventType extends Event = Event> = TFunction<
  [EventType],
  void
>;
