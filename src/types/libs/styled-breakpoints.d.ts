import "styled-breakpoints";
import { Orientation } from "styled-breakpoints/styled-breakpoints";
import { MEDIA_QUERY_BREAK_POINT_KEYS } from "../../styles/media-queries.styles";

declare module "styled-breakpoints" {
  export function up(
    min: MEDIA_QUERY_BREAK_POINT_KEYS,
    orientation?: Orientation
  ): any;

  export function down(
    max: MEDIA_QUERY_BREAK_POINT_KEYS,
    orientation?: Orientation
  ): any;

  export function between(
    min: MEDIA_QUERY_BREAK_POINT_KEYS,
    max: MEDIA_QUERY_BREAK_POINT_KEYS,
    orientation?: Orientation
  ): any;

  export function only(
    name: MEDIA_QUERY_BREAK_POINT_KEYS,
    orientation?: Orientation
  ): any;
}
