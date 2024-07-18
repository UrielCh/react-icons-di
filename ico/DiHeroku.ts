import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heroku icon from Devicons
 * @module
 */
export function DiHeroku(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M7.73 9.828c0 3.552 0.097 6.459 0.226 6.459 0.097 0 1.776-0.517 3.746-1.13 2.68-0.904 3.972-1.13 5.361-1.066l1.808 0.097 0.097 7.492 0.065 7.524h3.875v-7.88c0-7.653-0.032-7.879-0.743-8.945-1.292-1.938-4.618-2.358-8.752-1.13l-1.486 0.452v-8.332h-4.198v6.459zM18.872 5.727c-0.711 1.26-1.324 2.422-1.389 2.551-0.065 0.161 0.807 0.258 1.938 0.258h2.034l1.162-1.873c2.228-3.488 2.261-3.294-0.258-3.294h-2.196l-1.292 2.357zM7.73 25.167c0 2.034 0.129 3.714 0.258 3.714s1.066-0.839 2.099-1.873l1.841-1.873-1.873-1.841c-1.033-1.001-1.97-1.841-2.099-1.841s-0.226 1.679-0.226 3.714z"}}]})(props);
}
export default DiHeroku;
