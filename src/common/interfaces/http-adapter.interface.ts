export abstract class HttpAdapter {
  abstract get<T>(url: string): Promise<T>;
}
