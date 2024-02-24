export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
  static readonly JAVA = new Tag('Java', 'green');
  static readonly JAVASCRIPT = new Tag('Javascript', 'purple');
  static readonly MYSQL = new Tag('MySql', 'orange');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
