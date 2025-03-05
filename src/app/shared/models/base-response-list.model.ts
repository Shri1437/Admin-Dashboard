import { HttpStatus } from "src/app/core/models/http-status";

export interface BaseResponseListModel<T> {
  data: T;
  status: HttpStatus;
}
