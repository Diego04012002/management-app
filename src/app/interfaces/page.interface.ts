export interface Page<T> {
  content: T[];
  page: Pageable;
}

export interface Pageable {
  number: number;
  size: number;
  totalElement: number;
  totalPages: number;
}
