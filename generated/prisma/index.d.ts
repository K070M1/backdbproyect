
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model calificacion
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type calificacion = $Result.DefaultSelection<Prisma.$calificacionPayload>
/**
 * Model detalle_ruta
 * 
 */
export type detalle_ruta = $Result.DefaultSelection<Prisma.$detalle_rutaPayload>
/**
 * Model rutas
 * 
 */
export type rutas = $Result.DefaultSelection<Prisma.$rutasPayload>
/**
 * Model spatial_ref_sys
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type spatial_ref_sys = $Result.DefaultSelection<Prisma.$spatial_ref_sysPayload>
/**
 * Model tipo_evento
 * 
 */
export type tipo_evento = $Result.DefaultSelection<Prisma.$tipo_eventoPayload>
/**
 * Model ubicacion
 * 
 */
export type ubicacion = $Result.DefaultSelection<Prisma.$ubicacionPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model eventos
 * 
 */
export type eventos = $Result.DefaultSelection<Prisma.$eventosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Calificacions
 * const calificacions = await prisma.calificacion.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Calificacions
   * const calificacions = await prisma.calificacion.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.calificacion`: Exposes CRUD operations for the **calificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calificacions
    * const calificacions = await prisma.calificacion.findMany()
    * ```
    */
  get calificacion(): Prisma.calificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_ruta`: Exposes CRUD operations for the **detalle_ruta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_rutas
    * const detalle_rutas = await prisma.detalle_ruta.findMany()
    * ```
    */
  get detalle_ruta(): Prisma.detalle_rutaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutas`: Exposes CRUD operations for the **rutas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutas
    * const rutas = await prisma.rutas.findMany()
    * ```
    */
  get rutas(): Prisma.rutasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spatial_ref_sys`: Exposes CRUD operations for the **spatial_ref_sys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spatial_ref_sys
    * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
    * ```
    */
  get spatial_ref_sys(): Prisma.spatial_ref_sysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo_evento`: Exposes CRUD operations for the **tipo_evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_eventos
    * const tipo_eventos = await prisma.tipo_evento.findMany()
    * ```
    */
  get tipo_evento(): Prisma.tipo_eventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacion`: Exposes CRUD operations for the **ubicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ubicacions
    * const ubicacions = await prisma.ubicacion.findMany()
    * ```
    */
  get ubicacion(): Prisma.ubicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.eventosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    calificacion: 'calificacion',
    detalle_ruta: 'detalle_ruta',
    rutas: 'rutas',
    spatial_ref_sys: 'spatial_ref_sys',
    tipo_evento: 'tipo_evento',
    ubicacion: 'ubicacion',
    usuarios: 'usuarios',
    eventos: 'eventos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "calificacion" | "detalle_ruta" | "rutas" | "spatial_ref_sys" | "tipo_evento" | "ubicacion" | "usuarios" | "eventos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      calificacion: {
        payload: Prisma.$calificacionPayload<ExtArgs>
        fields: Prisma.calificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.calificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.calificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          findFirst: {
            args: Prisma.calificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.calificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          findMany: {
            args: Prisma.calificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>[]
          }
          create: {
            args: Prisma.calificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          createMany: {
            args: Prisma.calificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.calificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>[]
          }
          delete: {
            args: Prisma.calificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          update: {
            args: Prisma.calificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          deleteMany: {
            args: Prisma.calificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.calificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.calificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>[]
          }
          upsert: {
            args: Prisma.calificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          aggregate: {
            args: Prisma.CalificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalificacion>
          }
          groupBy: {
            args: Prisma.calificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.calificacionCountArgs<ExtArgs>
            result: $Utils.Optional<CalificacionCountAggregateOutputType> | number
          }
        }
      }
      detalle_ruta: {
        payload: Prisma.$detalle_rutaPayload<ExtArgs>
        fields: Prisma.detalle_rutaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_rutaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_rutaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>
          }
          findFirst: {
            args: Prisma.detalle_rutaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_rutaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>
          }
          findMany: {
            args: Prisma.detalle_rutaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>[]
          }
          create: {
            args: Prisma.detalle_rutaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>
          }
          createMany: {
            args: Prisma.detalle_rutaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detalle_rutaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>[]
          }
          delete: {
            args: Prisma.detalle_rutaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>
          }
          update: {
            args: Prisma.detalle_rutaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>
          }
          deleteMany: {
            args: Prisma.detalle_rutaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_rutaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detalle_rutaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>[]
          }
          upsert: {
            args: Prisma.detalle_rutaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_rutaPayload>
          }
          aggregate: {
            args: Prisma.Detalle_rutaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_ruta>
          }
          groupBy: {
            args: Prisma.detalle_rutaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_rutaGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_rutaCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_rutaCountAggregateOutputType> | number
          }
        }
      }
      rutas: {
        payload: Prisma.$rutasPayload<ExtArgs>
        fields: Prisma.rutasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rutasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rutasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>
          }
          findFirst: {
            args: Prisma.rutasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rutasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>
          }
          findMany: {
            args: Prisma.rutasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>[]
          }
          create: {
            args: Prisma.rutasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>
          }
          createMany: {
            args: Prisma.rutasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rutasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>[]
          }
          delete: {
            args: Prisma.rutasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>
          }
          update: {
            args: Prisma.rutasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>
          }
          deleteMany: {
            args: Prisma.rutasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rutasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rutasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>[]
          }
          upsert: {
            args: Prisma.rutasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rutasPayload>
          }
          aggregate: {
            args: Prisma.RutasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutas>
          }
          groupBy: {
            args: Prisma.rutasGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutasGroupByOutputType>[]
          }
          count: {
            args: Prisma.rutasCountArgs<ExtArgs>
            result: $Utils.Optional<RutasCountAggregateOutputType> | number
          }
        }
      }
      spatial_ref_sys: {
        payload: Prisma.$spatial_ref_sysPayload<ExtArgs>
        fields: Prisma.spatial_ref_sysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spatial_ref_sysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findFirst: {
            args: Prisma.spatial_ref_sysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findMany: {
            args: Prisma.spatial_ref_sysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          create: {
            args: Prisma.spatial_ref_sysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          createMany: {
            args: Prisma.spatial_ref_sysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          delete: {
            args: Prisma.spatial_ref_sysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          update: {
            args: Prisma.spatial_ref_sysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          deleteMany: {
            args: Prisma.spatial_ref_sysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spatial_ref_sysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          upsert: {
            args: Prisma.spatial_ref_sysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          aggregate: {
            args: Prisma.Spatial_ref_sysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpatial_ref_sys>
          }
          groupBy: {
            args: Prisma.spatial_ref_sysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysGroupByOutputType>[]
          }
          count: {
            args: Prisma.spatial_ref_sysCountArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysCountAggregateOutputType> | number
          }
        }
      }
      tipo_evento: {
        payload: Prisma.$tipo_eventoPayload<ExtArgs>
        fields: Prisma.tipo_eventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_eventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_eventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>
          }
          findFirst: {
            args: Prisma.tipo_eventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_eventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>
          }
          findMany: {
            args: Prisma.tipo_eventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>[]
          }
          create: {
            args: Prisma.tipo_eventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>
          }
          createMany: {
            args: Prisma.tipo_eventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipo_eventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>[]
          }
          delete: {
            args: Prisma.tipo_eventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>
          }
          update: {
            args: Prisma.tipo_eventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>
          }
          deleteMany: {
            args: Prisma.tipo_eventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_eventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipo_eventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>[]
          }
          upsert: {
            args: Prisma.tipo_eventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_eventoPayload>
          }
          aggregate: {
            args: Prisma.Tipo_eventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_evento>
          }
          groupBy: {
            args: Prisma.tipo_eventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_eventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_eventoCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_eventoCountAggregateOutputType> | number
          }
        }
      }
      ubicacion: {
        payload: Prisma.$ubicacionPayload<ExtArgs>
        fields: Prisma.ubicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ubicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ubicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          findFirst: {
            args: Prisma.ubicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ubicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          findMany: {
            args: Prisma.ubicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          create: {
            args: Prisma.ubicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          createMany: {
            args: Prisma.ubicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ubicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          delete: {
            args: Prisma.ubicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          update: {
            args: Prisma.ubicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          deleteMany: {
            args: Prisma.ubicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ubicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ubicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          upsert: {
            args: Prisma.ubicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          aggregate: {
            args: Prisma.UbicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacion>
          }
          groupBy: {
            args: Prisma.ubicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ubicacionCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      eventos: {
        payload: Prisma.$eventosPayload<ExtArgs>
        fields: Prisma.eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findFirst: {
            args: Prisma.eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findMany: {
            args: Prisma.eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          create: {
            args: Prisma.eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          createMany: {
            args: Prisma.eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          delete: {
            args: Prisma.eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          update: {
            args: Prisma.eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          deleteMany: {
            args: Prisma.eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          upsert: {
            args: Prisma.eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    calificacion?: calificacionOmit
    detalle_ruta?: detalle_rutaOmit
    rutas?: rutasOmit
    spatial_ref_sys?: spatial_ref_sysOmit
    tipo_evento?: tipo_eventoOmit
    ubicacion?: ubicacionOmit
    usuarios?: usuariosOmit
    eventos?: eventosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RutasCountOutputType
   */

  export type RutasCountOutputType = {
    detalle_ruta: number
  }

  export type RutasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_ruta?: boolean | RutasCountOutputTypeCountDetalle_rutaArgs
  }

  // Custom InputTypes
  /**
   * RutasCountOutputType without action
   */
  export type RutasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasCountOutputType
     */
    select?: RutasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutasCountOutputType without action
   */
  export type RutasCountOutputTypeCountDetalle_rutaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_rutaWhereInput
  }


  /**
   * Count Type Tipo_eventoCountOutputType
   */

  export type Tipo_eventoCountOutputType = {
    eventos: number
  }

  export type Tipo_eventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | Tipo_eventoCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * Tipo_eventoCountOutputType without action
   */
  export type Tipo_eventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_eventoCountOutputType
     */
    select?: Tipo_eventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_eventoCountOutputType without action
   */
  export type Tipo_eventoCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
  }


  /**
   * Count Type UbicacionCountOutputType
   */

  export type UbicacionCountOutputType = {
    rutas_rutas_id_destinoToubicacion: number
    rutas_rutas_id_origenToubicacion: number
  }

  export type UbicacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutas_rutas_id_destinoToubicacion?: boolean | UbicacionCountOutputTypeCountRutas_rutas_id_destinoToubicacionArgs
    rutas_rutas_id_origenToubicacion?: boolean | UbicacionCountOutputTypeCountRutas_rutas_id_origenToubicacionArgs
  }

  // Custom InputTypes
  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionCountOutputType
     */
    select?: UbicacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeCountRutas_rutas_id_destinoToubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rutasWhereInput
  }

  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeCountRutas_rutas_id_origenToubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rutasWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    calificacion: number
    eventos: number
    rutas: number
    ubicacion: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calificacion?: boolean | UsuariosCountOutputTypeCountCalificacionArgs
    eventos?: boolean | UsuariosCountOutputTypeCountEventosArgs
    rutas?: boolean | UsuariosCountOutputTypeCountRutasArgs
    ubicacion?: boolean | UsuariosCountOutputTypeCountUbicacionArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountCalificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calificacionWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountRutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rutasWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountUbicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ubicacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model calificacion
   */

  export type AggregateCalificacion = {
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  export type CalificacionAvgAggregateOutputType = {
    id_calificacion: number | null
    id_usuario: number | null
    calificacion: number | null
    id_evento: number | null
    id_zona_segura: number | null
  }

  export type CalificacionSumAggregateOutputType = {
    id_calificacion: number | null
    id_usuario: number | null
    calificacion: number | null
    id_evento: number | null
    id_zona_segura: number | null
  }

  export type CalificacionMinAggregateOutputType = {
    id_calificacion: number | null
    id_usuario: number | null
    calificacion: number | null
    comentario: string | null
    id_evento: number | null
    id_zona_segura: number | null
    tipo_calificacion: string | null
  }

  export type CalificacionMaxAggregateOutputType = {
    id_calificacion: number | null
    id_usuario: number | null
    calificacion: number | null
    comentario: string | null
    id_evento: number | null
    id_zona_segura: number | null
    tipo_calificacion: string | null
  }

  export type CalificacionCountAggregateOutputType = {
    id_calificacion: number
    id_usuario: number
    calificacion: number
    comentario: number
    id_evento: number
    id_zona_segura: number
    tipo_calificacion: number
    _all: number
  }


  export type CalificacionAvgAggregateInputType = {
    id_calificacion?: true
    id_usuario?: true
    calificacion?: true
    id_evento?: true
    id_zona_segura?: true
  }

  export type CalificacionSumAggregateInputType = {
    id_calificacion?: true
    id_usuario?: true
    calificacion?: true
    id_evento?: true
    id_zona_segura?: true
  }

  export type CalificacionMinAggregateInputType = {
    id_calificacion?: true
    id_usuario?: true
    calificacion?: true
    comentario?: true
    id_evento?: true
    id_zona_segura?: true
    tipo_calificacion?: true
  }

  export type CalificacionMaxAggregateInputType = {
    id_calificacion?: true
    id_usuario?: true
    calificacion?: true
    comentario?: true
    id_evento?: true
    id_zona_segura?: true
    tipo_calificacion?: true
  }

  export type CalificacionCountAggregateInputType = {
    id_calificacion?: true
    id_usuario?: true
    calificacion?: true
    comentario?: true
    id_evento?: true
    id_zona_segura?: true
    tipo_calificacion?: true
    _all?: true
  }

  export type CalificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calificacion to aggregate.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calificacions
    **/
    _count?: true | CalificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalificacionMaxAggregateInputType
  }

  export type GetCalificacionAggregateType<T extends CalificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateCalificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalificacion[P]>
      : GetScalarType<T[P], AggregateCalificacion[P]>
  }




  export type calificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calificacionWhereInput
    orderBy?: calificacionOrderByWithAggregationInput | calificacionOrderByWithAggregationInput[]
    by: CalificacionScalarFieldEnum[] | CalificacionScalarFieldEnum
    having?: calificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalificacionCountAggregateInputType | true
    _avg?: CalificacionAvgAggregateInputType
    _sum?: CalificacionSumAggregateInputType
    _min?: CalificacionMinAggregateInputType
    _max?: CalificacionMaxAggregateInputType
  }

  export type CalificacionGroupByOutputType = {
    id_calificacion: number
    id_usuario: number | null
    calificacion: number | null
    comentario: string | null
    id_evento: number | null
    id_zona_segura: number | null
    tipo_calificacion: string | null
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  type GetCalificacionGroupByPayload<T extends calificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
            : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
        }
      >
    >


  export type calificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_calificacion?: boolean
    id_usuario?: boolean
    calificacion?: boolean
    comentario?: boolean
    id_evento?: boolean
    id_zona_segura?: boolean
    tipo_calificacion?: boolean
    usuarios?: boolean | calificacion$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type calificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_calificacion?: boolean
    id_usuario?: boolean
    calificacion?: boolean
    comentario?: boolean
    id_evento?: boolean
    id_zona_segura?: boolean
    tipo_calificacion?: boolean
    usuarios?: boolean | calificacion$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type calificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_calificacion?: boolean
    id_usuario?: boolean
    calificacion?: boolean
    comentario?: boolean
    id_evento?: boolean
    id_zona_segura?: boolean
    tipo_calificacion?: boolean
    usuarios?: boolean | calificacion$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type calificacionSelectScalar = {
    id_calificacion?: boolean
    id_usuario?: boolean
    calificacion?: boolean
    comentario?: boolean
    id_evento?: boolean
    id_zona_segura?: boolean
    tipo_calificacion?: boolean
  }

  export type calificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_calificacion" | "id_usuario" | "calificacion" | "comentario" | "id_evento" | "id_zona_segura" | "tipo_calificacion", ExtArgs["result"]["calificacion"]>
  export type calificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | calificacion$usuariosArgs<ExtArgs>
  }
  export type calificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | calificacion$usuariosArgs<ExtArgs>
  }
  export type calificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | calificacion$usuariosArgs<ExtArgs>
  }

  export type $calificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calificacion"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_calificacion: number
      id_usuario: number | null
      calificacion: number | null
      comentario: string | null
      id_evento: number | null
      id_zona_segura: number | null
      tipo_calificacion: string | null
    }, ExtArgs["result"]["calificacion"]>
    composites: {}
  }

  type calificacionGetPayload<S extends boolean | null | undefined | calificacionDefaultArgs> = $Result.GetResult<Prisma.$calificacionPayload, S>

  type calificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<calificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalificacionCountAggregateInputType | true
    }

  export interface calificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calificacion'], meta: { name: 'calificacion' } }
    /**
     * Find zero or one Calificacion that matches the filter.
     * @param {calificacionFindUniqueArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calificacionFindUniqueArgs>(args: SelectSubset<T, calificacionFindUniqueArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {calificacionFindUniqueOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, calificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionFindFirstArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calificacionFindFirstArgs>(args?: SelectSubset<T, calificacionFindFirstArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionFindFirstOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, calificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calificacions
     * const calificacions = await prisma.calificacion.findMany()
     * 
     * // Get first 10 Calificacions
     * const calificacions = await prisma.calificacion.findMany({ take: 10 })
     * 
     * // Only select the `id_calificacion`
     * const calificacionWithId_calificacionOnly = await prisma.calificacion.findMany({ select: { id_calificacion: true } })
     * 
     */
    findMany<T extends calificacionFindManyArgs>(args?: SelectSubset<T, calificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calificacion.
     * @param {calificacionCreateArgs} args - Arguments to create a Calificacion.
     * @example
     * // Create one Calificacion
     * const Calificacion = await prisma.calificacion.create({
     *   data: {
     *     // ... data to create a Calificacion
     *   }
     * })
     * 
     */
    create<T extends calificacionCreateArgs>(args: SelectSubset<T, calificacionCreateArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calificacions.
     * @param {calificacionCreateManyArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends calificacionCreateManyArgs>(args?: SelectSubset<T, calificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calificacions and returns the data saved in the database.
     * @param {calificacionCreateManyAndReturnArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calificacions and only return the `id_calificacion`
     * const calificacionWithId_calificacionOnly = await prisma.calificacion.createManyAndReturn({
     *   select: { id_calificacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends calificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, calificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calificacion.
     * @param {calificacionDeleteArgs} args - Arguments to delete one Calificacion.
     * @example
     * // Delete one Calificacion
     * const Calificacion = await prisma.calificacion.delete({
     *   where: {
     *     // ... filter to delete one Calificacion
     *   }
     * })
     * 
     */
    delete<T extends calificacionDeleteArgs>(args: SelectSubset<T, calificacionDeleteArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calificacion.
     * @param {calificacionUpdateArgs} args - Arguments to update one Calificacion.
     * @example
     * // Update one Calificacion
     * const calificacion = await prisma.calificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends calificacionUpdateArgs>(args: SelectSubset<T, calificacionUpdateArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calificacions.
     * @param {calificacionDeleteManyArgs} args - Arguments to filter Calificacions to delete.
     * @example
     * // Delete a few Calificacions
     * const { count } = await prisma.calificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends calificacionDeleteManyArgs>(args?: SelectSubset<T, calificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends calificacionUpdateManyArgs>(args: SelectSubset<T, calificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions and returns the data updated in the database.
     * @param {calificacionUpdateManyAndReturnArgs} args - Arguments to update many Calificacions.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calificacions and only return the `id_calificacion`
     * const calificacionWithId_calificacionOnly = await prisma.calificacion.updateManyAndReturn({
     *   select: { id_calificacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends calificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, calificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calificacion.
     * @param {calificacionUpsertArgs} args - Arguments to update or create a Calificacion.
     * @example
     * // Update or create a Calificacion
     * const calificacion = await prisma.calificacion.upsert({
     *   create: {
     *     // ... data to create a Calificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calificacion we want to update
     *   }
     * })
     */
    upsert<T extends calificacionUpsertArgs>(args: SelectSubset<T, calificacionUpsertArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionCountArgs} args - Arguments to filter Calificacions to count.
     * @example
     * // Count the number of Calificacions
     * const count = await prisma.calificacion.count({
     *   where: {
     *     // ... the filter for the Calificacions we want to count
     *   }
     * })
    **/
    count<T extends calificacionCountArgs>(
      args?: Subset<T, calificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalificacionAggregateArgs>(args: Subset<T, CalificacionAggregateArgs>): Prisma.PrismaPromise<GetCalificacionAggregateType<T>>

    /**
     * Group by Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends calificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: calificacionGroupByArgs['orderBy'] }
        : { orderBy?: calificacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, calificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calificacion model
   */
  readonly fields: calificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__calificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends calificacion$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, calificacion$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the calificacion model
   */
  interface calificacionFieldRefs {
    readonly id_calificacion: FieldRef<"calificacion", 'Int'>
    readonly id_usuario: FieldRef<"calificacion", 'Int'>
    readonly calificacion: FieldRef<"calificacion", 'Int'>
    readonly comentario: FieldRef<"calificacion", 'String'>
    readonly id_evento: FieldRef<"calificacion", 'Int'>
    readonly id_zona_segura: FieldRef<"calificacion", 'Int'>
    readonly tipo_calificacion: FieldRef<"calificacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * calificacion findUnique
   */
  export type calificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion findUniqueOrThrow
   */
  export type calificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion findFirst
   */
  export type calificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calificacions.
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * calificacion findFirstOrThrow
   */
  export type calificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calificacions.
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * calificacion findMany
   */
  export type calificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacions to fetch.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calificacions.
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * calificacion create
   */
  export type calificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a calificacion.
     */
    data?: XOR<calificacionCreateInput, calificacionUncheckedCreateInput>
  }

  /**
   * calificacion createMany
   */
  export type calificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calificacions.
     */
    data: calificacionCreateManyInput | calificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * calificacion createManyAndReturn
   */
  export type calificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * The data used to create many calificacions.
     */
    data: calificacionCreateManyInput | calificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * calificacion update
   */
  export type calificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a calificacion.
     */
    data: XOR<calificacionUpdateInput, calificacionUncheckedUpdateInput>
    /**
     * Choose, which calificacion to update.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion updateMany
   */
  export type calificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calificacions.
     */
    data: XOR<calificacionUpdateManyMutationInput, calificacionUncheckedUpdateManyInput>
    /**
     * Filter which calificacions to update
     */
    where?: calificacionWhereInput
    /**
     * Limit how many calificacions to update.
     */
    limit?: number
  }

  /**
   * calificacion updateManyAndReturn
   */
  export type calificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * The data used to update calificacions.
     */
    data: XOR<calificacionUpdateManyMutationInput, calificacionUncheckedUpdateManyInput>
    /**
     * Filter which calificacions to update
     */
    where?: calificacionWhereInput
    /**
     * Limit how many calificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * calificacion upsert
   */
  export type calificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the calificacion to update in case it exists.
     */
    where: calificacionWhereUniqueInput
    /**
     * In case the calificacion found by the `where` argument doesn't exist, create a new calificacion with this data.
     */
    create: XOR<calificacionCreateInput, calificacionUncheckedCreateInput>
    /**
     * In case the calificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calificacionUpdateInput, calificacionUncheckedUpdateInput>
  }

  /**
   * calificacion delete
   */
  export type calificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter which calificacion to delete.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion deleteMany
   */
  export type calificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calificacions to delete
     */
    where?: calificacionWhereInput
    /**
     * Limit how many calificacions to delete.
     */
    limit?: number
  }

  /**
   * calificacion.usuarios
   */
  export type calificacion$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * calificacion without action
   */
  export type calificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
  }


  /**
   * Model detalle_ruta
   */

  export type AggregateDetalle_ruta = {
    _count: Detalle_rutaCountAggregateOutputType | null
    _avg: Detalle_rutaAvgAggregateOutputType | null
    _sum: Detalle_rutaSumAggregateOutputType | null
    _min: Detalle_rutaMinAggregateOutputType | null
    _max: Detalle_rutaMaxAggregateOutputType | null
  }

  export type Detalle_rutaAvgAggregateOutputType = {
    id_detalle_ruta: number | null
    id_ruta: number | null
    id_zona_segura: number | null
    id_evento: number | null
  }

  export type Detalle_rutaSumAggregateOutputType = {
    id_detalle_ruta: number | null
    id_ruta: number | null
    id_zona_segura: number | null
    id_evento: number | null
  }

  export type Detalle_rutaMinAggregateOutputType = {
    id_detalle_ruta: number | null
    id_ruta: number | null
    id_zona_segura: number | null
    id_evento: number | null
    fecha_registro: Date | null
  }

  export type Detalle_rutaMaxAggregateOutputType = {
    id_detalle_ruta: number | null
    id_ruta: number | null
    id_zona_segura: number | null
    id_evento: number | null
    fecha_registro: Date | null
  }

  export type Detalle_rutaCountAggregateOutputType = {
    id_detalle_ruta: number
    id_ruta: number
    id_zona_segura: number
    id_evento: number
    fecha_registro: number
    _all: number
  }


  export type Detalle_rutaAvgAggregateInputType = {
    id_detalle_ruta?: true
    id_ruta?: true
    id_zona_segura?: true
    id_evento?: true
  }

  export type Detalle_rutaSumAggregateInputType = {
    id_detalle_ruta?: true
    id_ruta?: true
    id_zona_segura?: true
    id_evento?: true
  }

  export type Detalle_rutaMinAggregateInputType = {
    id_detalle_ruta?: true
    id_ruta?: true
    id_zona_segura?: true
    id_evento?: true
    fecha_registro?: true
  }

  export type Detalle_rutaMaxAggregateInputType = {
    id_detalle_ruta?: true
    id_ruta?: true
    id_zona_segura?: true
    id_evento?: true
    fecha_registro?: true
  }

  export type Detalle_rutaCountAggregateInputType = {
    id_detalle_ruta?: true
    id_ruta?: true
    id_zona_segura?: true
    id_evento?: true
    fecha_registro?: true
    _all?: true
  }

  export type Detalle_rutaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_ruta to aggregate.
     */
    where?: detalle_rutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_rutas to fetch.
     */
    orderBy?: detalle_rutaOrderByWithRelationInput | detalle_rutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_rutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_rutas
    **/
    _count?: true | Detalle_rutaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_rutaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_rutaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_rutaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_rutaMaxAggregateInputType
  }

  export type GetDetalle_rutaAggregateType<T extends Detalle_rutaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_ruta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_ruta[P]>
      : GetScalarType<T[P], AggregateDetalle_ruta[P]>
  }




  export type detalle_rutaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_rutaWhereInput
    orderBy?: detalle_rutaOrderByWithAggregationInput | detalle_rutaOrderByWithAggregationInput[]
    by: Detalle_rutaScalarFieldEnum[] | Detalle_rutaScalarFieldEnum
    having?: detalle_rutaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_rutaCountAggregateInputType | true
    _avg?: Detalle_rutaAvgAggregateInputType
    _sum?: Detalle_rutaSumAggregateInputType
    _min?: Detalle_rutaMinAggregateInputType
    _max?: Detalle_rutaMaxAggregateInputType
  }

  export type Detalle_rutaGroupByOutputType = {
    id_detalle_ruta: number
    id_ruta: number | null
    id_zona_segura: number | null
    id_evento: number | null
    fecha_registro: Date | null
    _count: Detalle_rutaCountAggregateOutputType | null
    _avg: Detalle_rutaAvgAggregateOutputType | null
    _sum: Detalle_rutaSumAggregateOutputType | null
    _min: Detalle_rutaMinAggregateOutputType | null
    _max: Detalle_rutaMaxAggregateOutputType | null
  }

  type GetDetalle_rutaGroupByPayload<T extends detalle_rutaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_rutaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_rutaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_rutaGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_rutaGroupByOutputType[P]>
        }
      >
    >


  export type detalle_rutaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_ruta?: boolean
    id_ruta?: boolean
    id_zona_segura?: boolean
    id_evento?: boolean
    fecha_registro?: boolean
    rutas?: boolean | detalle_ruta$rutasArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_ruta"]>

  export type detalle_rutaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_ruta?: boolean
    id_ruta?: boolean
    id_zona_segura?: boolean
    id_evento?: boolean
    fecha_registro?: boolean
    rutas?: boolean | detalle_ruta$rutasArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_ruta"]>

  export type detalle_rutaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_ruta?: boolean
    id_ruta?: boolean
    id_zona_segura?: boolean
    id_evento?: boolean
    fecha_registro?: boolean
    rutas?: boolean | detalle_ruta$rutasArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_ruta"]>

  export type detalle_rutaSelectScalar = {
    id_detalle_ruta?: boolean
    id_ruta?: boolean
    id_zona_segura?: boolean
    id_evento?: boolean
    fecha_registro?: boolean
  }

  export type detalle_rutaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalle_ruta" | "id_ruta" | "id_zona_segura" | "id_evento" | "fecha_registro", ExtArgs["result"]["detalle_ruta"]>
  export type detalle_rutaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutas?: boolean | detalle_ruta$rutasArgs<ExtArgs>
  }
  export type detalle_rutaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutas?: boolean | detalle_ruta$rutasArgs<ExtArgs>
  }
  export type detalle_rutaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutas?: boolean | detalle_ruta$rutasArgs<ExtArgs>
  }

  export type $detalle_rutaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_ruta"
    objects: {
      rutas: Prisma.$rutasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalle_ruta: number
      id_ruta: number | null
      id_zona_segura: number | null
      id_evento: number | null
      fecha_registro: Date | null
    }, ExtArgs["result"]["detalle_ruta"]>
    composites: {}
  }

  type detalle_rutaGetPayload<S extends boolean | null | undefined | detalle_rutaDefaultArgs> = $Result.GetResult<Prisma.$detalle_rutaPayload, S>

  type detalle_rutaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalle_rutaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_rutaCountAggregateInputType | true
    }

  export interface detalle_rutaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_ruta'], meta: { name: 'detalle_ruta' } }
    /**
     * Find zero or one Detalle_ruta that matches the filter.
     * @param {detalle_rutaFindUniqueArgs} args - Arguments to find a Detalle_ruta
     * @example
     * // Get one Detalle_ruta
     * const detalle_ruta = await prisma.detalle_ruta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_rutaFindUniqueArgs>(args: SelectSubset<T, detalle_rutaFindUniqueArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_ruta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalle_rutaFindUniqueOrThrowArgs} args - Arguments to find a Detalle_ruta
     * @example
     * // Get one Detalle_ruta
     * const detalle_ruta = await prisma.detalle_ruta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_rutaFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_rutaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_ruta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_rutaFindFirstArgs} args - Arguments to find a Detalle_ruta
     * @example
     * // Get one Detalle_ruta
     * const detalle_ruta = await prisma.detalle_ruta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_rutaFindFirstArgs>(args?: SelectSubset<T, detalle_rutaFindFirstArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_ruta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_rutaFindFirstOrThrowArgs} args - Arguments to find a Detalle_ruta
     * @example
     * // Get one Detalle_ruta
     * const detalle_ruta = await prisma.detalle_ruta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_rutaFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_rutaFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_rutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_rutaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_rutas
     * const detalle_rutas = await prisma.detalle_ruta.findMany()
     * 
     * // Get first 10 Detalle_rutas
     * const detalle_rutas = await prisma.detalle_ruta.findMany({ take: 10 })
     * 
     * // Only select the `id_detalle_ruta`
     * const detalle_rutaWithId_detalle_rutaOnly = await prisma.detalle_ruta.findMany({ select: { id_detalle_ruta: true } })
     * 
     */
    findMany<T extends detalle_rutaFindManyArgs>(args?: SelectSubset<T, detalle_rutaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_ruta.
     * @param {detalle_rutaCreateArgs} args - Arguments to create a Detalle_ruta.
     * @example
     * // Create one Detalle_ruta
     * const Detalle_ruta = await prisma.detalle_ruta.create({
     *   data: {
     *     // ... data to create a Detalle_ruta
     *   }
     * })
     * 
     */
    create<T extends detalle_rutaCreateArgs>(args: SelectSubset<T, detalle_rutaCreateArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_rutas.
     * @param {detalle_rutaCreateManyArgs} args - Arguments to create many Detalle_rutas.
     * @example
     * // Create many Detalle_rutas
     * const detalle_ruta = await prisma.detalle_ruta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_rutaCreateManyArgs>(args?: SelectSubset<T, detalle_rutaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalle_rutas and returns the data saved in the database.
     * @param {detalle_rutaCreateManyAndReturnArgs} args - Arguments to create many Detalle_rutas.
     * @example
     * // Create many Detalle_rutas
     * const detalle_ruta = await prisma.detalle_ruta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalle_rutas and only return the `id_detalle_ruta`
     * const detalle_rutaWithId_detalle_rutaOnly = await prisma.detalle_ruta.createManyAndReturn({
     *   select: { id_detalle_ruta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detalle_rutaCreateManyAndReturnArgs>(args?: SelectSubset<T, detalle_rutaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalle_ruta.
     * @param {detalle_rutaDeleteArgs} args - Arguments to delete one Detalle_ruta.
     * @example
     * // Delete one Detalle_ruta
     * const Detalle_ruta = await prisma.detalle_ruta.delete({
     *   where: {
     *     // ... filter to delete one Detalle_ruta
     *   }
     * })
     * 
     */
    delete<T extends detalle_rutaDeleteArgs>(args: SelectSubset<T, detalle_rutaDeleteArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_ruta.
     * @param {detalle_rutaUpdateArgs} args - Arguments to update one Detalle_ruta.
     * @example
     * // Update one Detalle_ruta
     * const detalle_ruta = await prisma.detalle_ruta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_rutaUpdateArgs>(args: SelectSubset<T, detalle_rutaUpdateArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_rutas.
     * @param {detalle_rutaDeleteManyArgs} args - Arguments to filter Detalle_rutas to delete.
     * @example
     * // Delete a few Detalle_rutas
     * const { count } = await prisma.detalle_ruta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_rutaDeleteManyArgs>(args?: SelectSubset<T, detalle_rutaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_rutaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_rutas
     * const detalle_ruta = await prisma.detalle_ruta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_rutaUpdateManyArgs>(args: SelectSubset<T, detalle_rutaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_rutas and returns the data updated in the database.
     * @param {detalle_rutaUpdateManyAndReturnArgs} args - Arguments to update many Detalle_rutas.
     * @example
     * // Update many Detalle_rutas
     * const detalle_ruta = await prisma.detalle_ruta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalle_rutas and only return the `id_detalle_ruta`
     * const detalle_rutaWithId_detalle_rutaOnly = await prisma.detalle_ruta.updateManyAndReturn({
     *   select: { id_detalle_ruta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detalle_rutaUpdateManyAndReturnArgs>(args: SelectSubset<T, detalle_rutaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalle_ruta.
     * @param {detalle_rutaUpsertArgs} args - Arguments to update or create a Detalle_ruta.
     * @example
     * // Update or create a Detalle_ruta
     * const detalle_ruta = await prisma.detalle_ruta.upsert({
     *   create: {
     *     // ... data to create a Detalle_ruta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_ruta we want to update
     *   }
     * })
     */
    upsert<T extends detalle_rutaUpsertArgs>(args: SelectSubset<T, detalle_rutaUpsertArgs<ExtArgs>>): Prisma__detalle_rutaClient<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_rutaCountArgs} args - Arguments to filter Detalle_rutas to count.
     * @example
     * // Count the number of Detalle_rutas
     * const count = await prisma.detalle_ruta.count({
     *   where: {
     *     // ... the filter for the Detalle_rutas we want to count
     *   }
     * })
    **/
    count<T extends detalle_rutaCountArgs>(
      args?: Subset<T, detalle_rutaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_rutaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_rutaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_rutaAggregateArgs>(args: Subset<T, Detalle_rutaAggregateArgs>): Prisma.PrismaPromise<GetDetalle_rutaAggregateType<T>>

    /**
     * Group by Detalle_ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_rutaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalle_rutaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_rutaGroupByArgs['orderBy'] }
        : { orderBy?: detalle_rutaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalle_rutaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_rutaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_ruta model
   */
  readonly fields: detalle_rutaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_ruta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_rutaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutas<T extends detalle_ruta$rutasArgs<ExtArgs> = {}>(args?: Subset<T, detalle_ruta$rutasArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalle_ruta model
   */
  interface detalle_rutaFieldRefs {
    readonly id_detalle_ruta: FieldRef<"detalle_ruta", 'Int'>
    readonly id_ruta: FieldRef<"detalle_ruta", 'Int'>
    readonly id_zona_segura: FieldRef<"detalle_ruta", 'Int'>
    readonly id_evento: FieldRef<"detalle_ruta", 'Int'>
    readonly fecha_registro: FieldRef<"detalle_ruta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * detalle_ruta findUnique
   */
  export type detalle_rutaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ruta to fetch.
     */
    where: detalle_rutaWhereUniqueInput
  }

  /**
   * detalle_ruta findUniqueOrThrow
   */
  export type detalle_rutaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ruta to fetch.
     */
    where: detalle_rutaWhereUniqueInput
  }

  /**
   * detalle_ruta findFirst
   */
  export type detalle_rutaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ruta to fetch.
     */
    where?: detalle_rutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_rutas to fetch.
     */
    orderBy?: detalle_rutaOrderByWithRelationInput | detalle_rutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_rutas.
     */
    cursor?: detalle_rutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_rutas.
     */
    distinct?: Detalle_rutaScalarFieldEnum | Detalle_rutaScalarFieldEnum[]
  }

  /**
   * detalle_ruta findFirstOrThrow
   */
  export type detalle_rutaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ruta to fetch.
     */
    where?: detalle_rutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_rutas to fetch.
     */
    orderBy?: detalle_rutaOrderByWithRelationInput | detalle_rutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_rutas.
     */
    cursor?: detalle_rutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_rutas.
     */
    distinct?: Detalle_rutaScalarFieldEnum | Detalle_rutaScalarFieldEnum[]
  }

  /**
   * detalle_ruta findMany
   */
  export type detalle_rutaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_rutas to fetch.
     */
    where?: detalle_rutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_rutas to fetch.
     */
    orderBy?: detalle_rutaOrderByWithRelationInput | detalle_rutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_rutas.
     */
    cursor?: detalle_rutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_rutas.
     */
    skip?: number
    distinct?: Detalle_rutaScalarFieldEnum | Detalle_rutaScalarFieldEnum[]
  }

  /**
   * detalle_ruta create
   */
  export type detalle_rutaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * The data needed to create a detalle_ruta.
     */
    data?: XOR<detalle_rutaCreateInput, detalle_rutaUncheckedCreateInput>
  }

  /**
   * detalle_ruta createMany
   */
  export type detalle_rutaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_rutas.
     */
    data: detalle_rutaCreateManyInput | detalle_rutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_ruta createManyAndReturn
   */
  export type detalle_rutaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * The data used to create many detalle_rutas.
     */
    data: detalle_rutaCreateManyInput | detalle_rutaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalle_ruta update
   */
  export type detalle_rutaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * The data needed to update a detalle_ruta.
     */
    data: XOR<detalle_rutaUpdateInput, detalle_rutaUncheckedUpdateInput>
    /**
     * Choose, which detalle_ruta to update.
     */
    where: detalle_rutaWhereUniqueInput
  }

  /**
   * detalle_ruta updateMany
   */
  export type detalle_rutaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_rutas.
     */
    data: XOR<detalle_rutaUpdateManyMutationInput, detalle_rutaUncheckedUpdateManyInput>
    /**
     * Filter which detalle_rutas to update
     */
    where?: detalle_rutaWhereInput
    /**
     * Limit how many detalle_rutas to update.
     */
    limit?: number
  }

  /**
   * detalle_ruta updateManyAndReturn
   */
  export type detalle_rutaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * The data used to update detalle_rutas.
     */
    data: XOR<detalle_rutaUpdateManyMutationInput, detalle_rutaUncheckedUpdateManyInput>
    /**
     * Filter which detalle_rutas to update
     */
    where?: detalle_rutaWhereInput
    /**
     * Limit how many detalle_rutas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalle_ruta upsert
   */
  export type detalle_rutaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * The filter to search for the detalle_ruta to update in case it exists.
     */
    where: detalle_rutaWhereUniqueInput
    /**
     * In case the detalle_ruta found by the `where` argument doesn't exist, create a new detalle_ruta with this data.
     */
    create: XOR<detalle_rutaCreateInput, detalle_rutaUncheckedCreateInput>
    /**
     * In case the detalle_ruta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_rutaUpdateInput, detalle_rutaUncheckedUpdateInput>
  }

  /**
   * detalle_ruta delete
   */
  export type detalle_rutaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    /**
     * Filter which detalle_ruta to delete.
     */
    where: detalle_rutaWhereUniqueInput
  }

  /**
   * detalle_ruta deleteMany
   */
  export type detalle_rutaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_rutas to delete
     */
    where?: detalle_rutaWhereInput
    /**
     * Limit how many detalle_rutas to delete.
     */
    limit?: number
  }

  /**
   * detalle_ruta.rutas
   */
  export type detalle_ruta$rutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    where?: rutasWhereInput
  }

  /**
   * detalle_ruta without action
   */
  export type detalle_rutaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
  }


  /**
   * Model rutas
   */

  export type AggregateRutas = {
    _count: RutasCountAggregateOutputType | null
    _avg: RutasAvgAggregateOutputType | null
    _sum: RutasSumAggregateOutputType | null
    _min: RutasMinAggregateOutputType | null
    _max: RutasMaxAggregateOutputType | null
  }

  export type RutasAvgAggregateOutputType = {
    id_ruta: number | null
    id_usuario: number | null
    riesgo: number | null
    id_origen: number | null
    id_destino: number | null
  }

  export type RutasSumAggregateOutputType = {
    id_ruta: number | null
    id_usuario: number | null
    riesgo: number | null
    id_origen: number | null
    id_destino: number | null
  }

  export type RutasMinAggregateOutputType = {
    id_ruta: number | null
    id_usuario: number | null
    riesgo: number | null
    id_origen: number | null
    id_destino: number | null
    favorito: boolean | null
  }

  export type RutasMaxAggregateOutputType = {
    id_ruta: number | null
    id_usuario: number | null
    riesgo: number | null
    id_origen: number | null
    id_destino: number | null
    favorito: boolean | null
  }

  export type RutasCountAggregateOutputType = {
    id_ruta: number
    id_usuario: number
    riesgo: number
    id_origen: number
    id_destino: number
    favorito: number
    _all: number
  }


  export type RutasAvgAggregateInputType = {
    id_ruta?: true
    id_usuario?: true
    riesgo?: true
    id_origen?: true
    id_destino?: true
  }

  export type RutasSumAggregateInputType = {
    id_ruta?: true
    id_usuario?: true
    riesgo?: true
    id_origen?: true
    id_destino?: true
  }

  export type RutasMinAggregateInputType = {
    id_ruta?: true
    id_usuario?: true
    riesgo?: true
    id_origen?: true
    id_destino?: true
    favorito?: true
  }

  export type RutasMaxAggregateInputType = {
    id_ruta?: true
    id_usuario?: true
    riesgo?: true
    id_origen?: true
    id_destino?: true
    favorito?: true
  }

  export type RutasCountAggregateInputType = {
    id_ruta?: true
    id_usuario?: true
    riesgo?: true
    id_origen?: true
    id_destino?: true
    favorito?: true
    _all?: true
  }

  export type RutasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rutas to aggregate.
     */
    where?: rutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rutas to fetch.
     */
    orderBy?: rutasOrderByWithRelationInput | rutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rutas
    **/
    _count?: true | RutasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutasMaxAggregateInputType
  }

  export type GetRutasAggregateType<T extends RutasAggregateArgs> = {
        [P in keyof T & keyof AggregateRutas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutas[P]>
      : GetScalarType<T[P], AggregateRutas[P]>
  }




  export type rutasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rutasWhereInput
    orderBy?: rutasOrderByWithAggregationInput | rutasOrderByWithAggregationInput[]
    by: RutasScalarFieldEnum[] | RutasScalarFieldEnum
    having?: rutasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutasCountAggregateInputType | true
    _avg?: RutasAvgAggregateInputType
    _sum?: RutasSumAggregateInputType
    _min?: RutasMinAggregateInputType
    _max?: RutasMaxAggregateInputType
  }

  export type RutasGroupByOutputType = {
    id_ruta: number
    id_usuario: number | null
    riesgo: number | null
    id_origen: number | null
    id_destino: number | null
    favorito: boolean | null
    _count: RutasCountAggregateOutputType | null
    _avg: RutasAvgAggregateOutputType | null
    _sum: RutasSumAggregateOutputType | null
    _min: RutasMinAggregateOutputType | null
    _max: RutasMaxAggregateOutputType | null
  }

  type GetRutasGroupByPayload<T extends rutasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutasGroupByOutputType[P]>
            : GetScalarType<T[P], RutasGroupByOutputType[P]>
        }
      >
    >


  export type rutasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    id_usuario?: boolean
    riesgo?: boolean
    id_origen?: boolean
    id_destino?: boolean
    favorito?: boolean
    detalle_ruta?: boolean | rutas$detalle_rutaArgs<ExtArgs>
    ubicacion_rutas_id_destinoToubicacion?: boolean | rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs>
    ubicacion_rutas_id_origenToubicacion?: boolean | rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | rutas$usuariosArgs<ExtArgs>
    _count?: boolean | RutasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutas"]>

  export type rutasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    id_usuario?: boolean
    riesgo?: boolean
    id_origen?: boolean
    id_destino?: boolean
    favorito?: boolean
    ubicacion_rutas_id_destinoToubicacion?: boolean | rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs>
    ubicacion_rutas_id_origenToubicacion?: boolean | rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | rutas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["rutas"]>

  export type rutasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    id_usuario?: boolean
    riesgo?: boolean
    id_origen?: boolean
    id_destino?: boolean
    favorito?: boolean
    ubicacion_rutas_id_destinoToubicacion?: boolean | rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs>
    ubicacion_rutas_id_origenToubicacion?: boolean | rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | rutas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["rutas"]>

  export type rutasSelectScalar = {
    id_ruta?: boolean
    id_usuario?: boolean
    riesgo?: boolean
    id_origen?: boolean
    id_destino?: boolean
    favorito?: boolean
  }

  export type rutasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ruta" | "id_usuario" | "riesgo" | "id_origen" | "id_destino" | "favorito", ExtArgs["result"]["rutas"]>
  export type rutasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_ruta?: boolean | rutas$detalle_rutaArgs<ExtArgs>
    ubicacion_rutas_id_destinoToubicacion?: boolean | rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs>
    ubicacion_rutas_id_origenToubicacion?: boolean | rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | rutas$usuariosArgs<ExtArgs>
    _count?: boolean | RutasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rutasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion_rutas_id_destinoToubicacion?: boolean | rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs>
    ubicacion_rutas_id_origenToubicacion?: boolean | rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | rutas$usuariosArgs<ExtArgs>
  }
  export type rutasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion_rutas_id_destinoToubicacion?: boolean | rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs>
    ubicacion_rutas_id_origenToubicacion?: boolean | rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | rutas$usuariosArgs<ExtArgs>
  }

  export type $rutasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rutas"
    objects: {
      detalle_ruta: Prisma.$detalle_rutaPayload<ExtArgs>[]
      ubicacion_rutas_id_destinoToubicacion: Prisma.$ubicacionPayload<ExtArgs> | null
      ubicacion_rutas_id_origenToubicacion: Prisma.$ubicacionPayload<ExtArgs> | null
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ruta: number
      id_usuario: number | null
      riesgo: number | null
      id_origen: number | null
      id_destino: number | null
      favorito: boolean | null
    }, ExtArgs["result"]["rutas"]>
    composites: {}
  }

  type rutasGetPayload<S extends boolean | null | undefined | rutasDefaultArgs> = $Result.GetResult<Prisma.$rutasPayload, S>

  type rutasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rutasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutasCountAggregateInputType | true
    }

  export interface rutasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rutas'], meta: { name: 'rutas' } }
    /**
     * Find zero or one Rutas that matches the filter.
     * @param {rutasFindUniqueArgs} args - Arguments to find a Rutas
     * @example
     * // Get one Rutas
     * const rutas = await prisma.rutas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rutasFindUniqueArgs>(args: SelectSubset<T, rutasFindUniqueArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rutas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rutasFindUniqueOrThrowArgs} args - Arguments to find a Rutas
     * @example
     * // Get one Rutas
     * const rutas = await prisma.rutas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rutasFindUniqueOrThrowArgs>(args: SelectSubset<T, rutasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rutasFindFirstArgs} args - Arguments to find a Rutas
     * @example
     * // Get one Rutas
     * const rutas = await prisma.rutas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rutasFindFirstArgs>(args?: SelectSubset<T, rutasFindFirstArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rutasFindFirstOrThrowArgs} args - Arguments to find a Rutas
     * @example
     * // Get one Rutas
     * const rutas = await prisma.rutas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rutasFindFirstOrThrowArgs>(args?: SelectSubset<T, rutasFindFirstOrThrowArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rutasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutas
     * const rutas = await prisma.rutas.findMany()
     * 
     * // Get first 10 Rutas
     * const rutas = await prisma.rutas.findMany({ take: 10 })
     * 
     * // Only select the `id_ruta`
     * const rutasWithId_rutaOnly = await prisma.rutas.findMany({ select: { id_ruta: true } })
     * 
     */
    findMany<T extends rutasFindManyArgs>(args?: SelectSubset<T, rutasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rutas.
     * @param {rutasCreateArgs} args - Arguments to create a Rutas.
     * @example
     * // Create one Rutas
     * const Rutas = await prisma.rutas.create({
     *   data: {
     *     // ... data to create a Rutas
     *   }
     * })
     * 
     */
    create<T extends rutasCreateArgs>(args: SelectSubset<T, rutasCreateArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutas.
     * @param {rutasCreateManyArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const rutas = await prisma.rutas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rutasCreateManyArgs>(args?: SelectSubset<T, rutasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutas and returns the data saved in the database.
     * @param {rutasCreateManyAndReturnArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const rutas = await prisma.rutas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutas and only return the `id_ruta`
     * const rutasWithId_rutaOnly = await prisma.rutas.createManyAndReturn({
     *   select: { id_ruta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rutasCreateManyAndReturnArgs>(args?: SelectSubset<T, rutasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rutas.
     * @param {rutasDeleteArgs} args - Arguments to delete one Rutas.
     * @example
     * // Delete one Rutas
     * const Rutas = await prisma.rutas.delete({
     *   where: {
     *     // ... filter to delete one Rutas
     *   }
     * })
     * 
     */
    delete<T extends rutasDeleteArgs>(args: SelectSubset<T, rutasDeleteArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rutas.
     * @param {rutasUpdateArgs} args - Arguments to update one Rutas.
     * @example
     * // Update one Rutas
     * const rutas = await prisma.rutas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rutasUpdateArgs>(args: SelectSubset<T, rutasUpdateArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutas.
     * @param {rutasDeleteManyArgs} args - Arguments to filter Rutas to delete.
     * @example
     * // Delete a few Rutas
     * const { count } = await prisma.rutas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rutasDeleteManyArgs>(args?: SelectSubset<T, rutasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rutasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutas
     * const rutas = await prisma.rutas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rutasUpdateManyArgs>(args: SelectSubset<T, rutasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas and returns the data updated in the database.
     * @param {rutasUpdateManyAndReturnArgs} args - Arguments to update many Rutas.
     * @example
     * // Update many Rutas
     * const rutas = await prisma.rutas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutas and only return the `id_ruta`
     * const rutasWithId_rutaOnly = await prisma.rutas.updateManyAndReturn({
     *   select: { id_ruta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rutasUpdateManyAndReturnArgs>(args: SelectSubset<T, rutasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rutas.
     * @param {rutasUpsertArgs} args - Arguments to update or create a Rutas.
     * @example
     * // Update or create a Rutas
     * const rutas = await prisma.rutas.upsert({
     *   create: {
     *     // ... data to create a Rutas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutas we want to update
     *   }
     * })
     */
    upsert<T extends rutasUpsertArgs>(args: SelectSubset<T, rutasUpsertArgs<ExtArgs>>): Prisma__rutasClient<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rutasCountArgs} args - Arguments to filter Rutas to count.
     * @example
     * // Count the number of Rutas
     * const count = await prisma.rutas.count({
     *   where: {
     *     // ... the filter for the Rutas we want to count
     *   }
     * })
    **/
    count<T extends rutasCountArgs>(
      args?: Subset<T, rutasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutasAggregateArgs>(args: Subset<T, RutasAggregateArgs>): Prisma.PrismaPromise<GetRutasAggregateType<T>>

    /**
     * Group by Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rutasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rutasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rutasGroupByArgs['orderBy'] }
        : { orderBy?: rutasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rutasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rutas model
   */
  readonly fields: rutasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rutas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rutasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_ruta<T extends rutas$detalle_rutaArgs<ExtArgs> = {}>(args?: Subset<T, rutas$detalle_rutaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_rutaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ubicacion_rutas_id_destinoToubicacion<T extends rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs> = {}>(args?: Subset<T, rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ubicacion_rutas_id_origenToubicacion<T extends rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs> = {}>(args?: Subset<T, rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends rutas$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, rutas$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rutas model
   */
  interface rutasFieldRefs {
    readonly id_ruta: FieldRef<"rutas", 'Int'>
    readonly id_usuario: FieldRef<"rutas", 'Int'>
    readonly riesgo: FieldRef<"rutas", 'Int'>
    readonly id_origen: FieldRef<"rutas", 'Int'>
    readonly id_destino: FieldRef<"rutas", 'Int'>
    readonly favorito: FieldRef<"rutas", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * rutas findUnique
   */
  export type rutasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * Filter, which rutas to fetch.
     */
    where: rutasWhereUniqueInput
  }

  /**
   * rutas findUniqueOrThrow
   */
  export type rutasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * Filter, which rutas to fetch.
     */
    where: rutasWhereUniqueInput
  }

  /**
   * rutas findFirst
   */
  export type rutasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * Filter, which rutas to fetch.
     */
    where?: rutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rutas to fetch.
     */
    orderBy?: rutasOrderByWithRelationInput | rutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rutas.
     */
    cursor?: rutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rutas.
     */
    distinct?: RutasScalarFieldEnum | RutasScalarFieldEnum[]
  }

  /**
   * rutas findFirstOrThrow
   */
  export type rutasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * Filter, which rutas to fetch.
     */
    where?: rutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rutas to fetch.
     */
    orderBy?: rutasOrderByWithRelationInput | rutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rutas.
     */
    cursor?: rutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rutas.
     */
    distinct?: RutasScalarFieldEnum | RutasScalarFieldEnum[]
  }

  /**
   * rutas findMany
   */
  export type rutasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * Filter, which rutas to fetch.
     */
    where?: rutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rutas to fetch.
     */
    orderBy?: rutasOrderByWithRelationInput | rutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rutas.
     */
    cursor?: rutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rutas.
     */
    skip?: number
    distinct?: RutasScalarFieldEnum | RutasScalarFieldEnum[]
  }

  /**
   * rutas create
   */
  export type rutasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * The data needed to create a rutas.
     */
    data?: XOR<rutasCreateInput, rutasUncheckedCreateInput>
  }

  /**
   * rutas createMany
   */
  export type rutasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rutas.
     */
    data: rutasCreateManyInput | rutasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rutas createManyAndReturn
   */
  export type rutasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * The data used to create many rutas.
     */
    data: rutasCreateManyInput | rutasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rutas update
   */
  export type rutasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * The data needed to update a rutas.
     */
    data: XOR<rutasUpdateInput, rutasUncheckedUpdateInput>
    /**
     * Choose, which rutas to update.
     */
    where: rutasWhereUniqueInput
  }

  /**
   * rutas updateMany
   */
  export type rutasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rutas.
     */
    data: XOR<rutasUpdateManyMutationInput, rutasUncheckedUpdateManyInput>
    /**
     * Filter which rutas to update
     */
    where?: rutasWhereInput
    /**
     * Limit how many rutas to update.
     */
    limit?: number
  }

  /**
   * rutas updateManyAndReturn
   */
  export type rutasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * The data used to update rutas.
     */
    data: XOR<rutasUpdateManyMutationInput, rutasUncheckedUpdateManyInput>
    /**
     * Filter which rutas to update
     */
    where?: rutasWhereInput
    /**
     * Limit how many rutas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rutas upsert
   */
  export type rutasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * The filter to search for the rutas to update in case it exists.
     */
    where: rutasWhereUniqueInput
    /**
     * In case the rutas found by the `where` argument doesn't exist, create a new rutas with this data.
     */
    create: XOR<rutasCreateInput, rutasUncheckedCreateInput>
    /**
     * In case the rutas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rutasUpdateInput, rutasUncheckedUpdateInput>
  }

  /**
   * rutas delete
   */
  export type rutasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    /**
     * Filter which rutas to delete.
     */
    where: rutasWhereUniqueInput
  }

  /**
   * rutas deleteMany
   */
  export type rutasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rutas to delete
     */
    where?: rutasWhereInput
    /**
     * Limit how many rutas to delete.
     */
    limit?: number
  }

  /**
   * rutas.detalle_ruta
   */
  export type rutas$detalle_rutaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ruta
     */
    select?: detalle_rutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_ruta
     */
    omit?: detalle_rutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_rutaInclude<ExtArgs> | null
    where?: detalle_rutaWhereInput
    orderBy?: detalle_rutaOrderByWithRelationInput | detalle_rutaOrderByWithRelationInput[]
    cursor?: detalle_rutaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_rutaScalarFieldEnum | Detalle_rutaScalarFieldEnum[]
  }

  /**
   * rutas.ubicacion_rutas_id_destinoToubicacion
   */
  export type rutas$ubicacion_rutas_id_destinoToubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    where?: ubicacionWhereInput
  }

  /**
   * rutas.ubicacion_rutas_id_origenToubicacion
   */
  export type rutas$ubicacion_rutas_id_origenToubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    where?: ubicacionWhereInput
  }

  /**
   * rutas.usuarios
   */
  export type rutas$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * rutas without action
   */
  export type rutasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
  }


  /**
   * Model spatial_ref_sys
   */

  export type AggregateSpatial_ref_sys = {
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  export type Spatial_ref_sysAvgAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysSumAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysMinAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysMaxAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysCountAggregateOutputType = {
    srid: number
    auth_name: number
    auth_srid: number
    srtext: number
    proj4text: number
    _all: number
  }


  export type Spatial_ref_sysAvgAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysSumAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysMinAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysMaxAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysCountAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
    _all?: true
  }

  export type Spatial_ref_sysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to aggregate.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spatial_ref_sys
    **/
    _count?: true | Spatial_ref_sysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spatial_ref_sysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spatial_ref_sysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spatial_ref_sysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type GetSpatial_ref_sysAggregateType<T extends Spatial_ref_sysAggregateArgs> = {
        [P in keyof T & keyof AggregateSpatial_ref_sys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
      : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
  }




  export type spatial_ref_sysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spatial_ref_sysWhereInput
    orderBy?: spatial_ref_sysOrderByWithAggregationInput | spatial_ref_sysOrderByWithAggregationInput[]
    by: Spatial_ref_sysScalarFieldEnum[] | Spatial_ref_sysScalarFieldEnum
    having?: spatial_ref_sysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spatial_ref_sysCountAggregateInputType | true
    _avg?: Spatial_ref_sysAvgAggregateInputType
    _sum?: Spatial_ref_sysSumAggregateInputType
    _min?: Spatial_ref_sysMinAggregateInputType
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type Spatial_ref_sysGroupByOutputType = {
    srid: number
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  type GetSpatial_ref_sysGroupByPayload<T extends spatial_ref_sysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spatial_ref_sysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spatial_ref_sysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
            : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
        }
      >
    >


  export type spatial_ref_sysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectScalar = {
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }

  export type spatial_ref_sysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"srid" | "auth_name" | "auth_srid" | "srtext" | "proj4text", ExtArgs["result"]["spatial_ref_sys"]>

  export type $spatial_ref_sysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spatial_ref_sys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      srid: number
      auth_name: string | null
      auth_srid: number | null
      srtext: string | null
      proj4text: string | null
    }, ExtArgs["result"]["spatial_ref_sys"]>
    composites: {}
  }

  type spatial_ref_sysGetPayload<S extends boolean | null | undefined | spatial_ref_sysDefaultArgs> = $Result.GetResult<Prisma.$spatial_ref_sysPayload, S>

  type spatial_ref_sysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spatial_ref_sysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spatial_ref_sysCountAggregateInputType | true
    }

  export interface spatial_ref_sysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spatial_ref_sys'], meta: { name: 'spatial_ref_sys' } }
    /**
     * Find zero or one Spatial_ref_sys that matches the filter.
     * @param {spatial_ref_sysFindUniqueArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spatial_ref_sysFindUniqueArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spatial_ref_sys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spatial_ref_sysFindUniqueOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spatial_ref_sysFindUniqueOrThrowArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spatial_ref_sysFindFirstArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spatial_ref_sysFindFirstOrThrowArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
     * 
     * // Get first 10 Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany({ take: 10 })
     * 
     * // Only select the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.findMany({ select: { srid: true } })
     * 
     */
    findMany<T extends spatial_ref_sysFindManyArgs>(args?: SelectSubset<T, spatial_ref_sysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spatial_ref_sys.
     * @param {spatial_ref_sysCreateArgs} args - Arguments to create a Spatial_ref_sys.
     * @example
     * // Create one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.create({
     *   data: {
     *     // ... data to create a Spatial_ref_sys
     *   }
     * })
     * 
     */
    create<T extends spatial_ref_sysCreateArgs>(args: SelectSubset<T, spatial_ref_sysCreateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spatial_ref_sys.
     * @param {spatial_ref_sysCreateManyArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spatial_ref_sysCreateManyArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spatial_ref_sys and returns the data saved in the database.
     * @param {spatial_ref_sysCreateManyAndReturnArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.createManyAndReturn({
     *   select: { srid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends spatial_ref_sysCreateManyAndReturnArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteArgs} args - Arguments to delete one Spatial_ref_sys.
     * @example
     * // Delete one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.delete({
     *   where: {
     *     // ... filter to delete one Spatial_ref_sys
     *   }
     * })
     * 
     */
    delete<T extends spatial_ref_sysDeleteArgs>(args: SelectSubset<T, spatial_ref_sysDeleteArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpdateArgs} args - Arguments to update one Spatial_ref_sys.
     * @example
     * // Update one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spatial_ref_sysUpdateArgs>(args: SelectSubset<T, spatial_ref_sysUpdateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteManyArgs} args - Arguments to filter Spatial_ref_sys to delete.
     * @example
     * // Delete a few Spatial_ref_sys
     * const { count } = await prisma.spatial_ref_sys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spatial_ref_sysDeleteManyArgs>(args?: SelectSubset<T, spatial_ref_sysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spatial_ref_sysUpdateManyArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys and returns the data updated in the database.
     * @param {spatial_ref_sysUpdateManyAndReturnArgs} args - Arguments to update many Spatial_ref_sys.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   select: { srid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends spatial_ref_sysUpdateManyAndReturnArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpsertArgs} args - Arguments to update or create a Spatial_ref_sys.
     * @example
     * // Update or create a Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.upsert({
     *   create: {
     *     // ... data to create a Spatial_ref_sys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to update
     *   }
     * })
     */
    upsert<T extends spatial_ref_sysUpsertArgs>(args: SelectSubset<T, spatial_ref_sysUpsertArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysCountArgs} args - Arguments to filter Spatial_ref_sys to count.
     * @example
     * // Count the number of Spatial_ref_sys
     * const count = await prisma.spatial_ref_sys.count({
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to count
     *   }
     * })
    **/
    count<T extends spatial_ref_sysCountArgs>(
      args?: Subset<T, spatial_ref_sysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spatial_ref_sysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spatial_ref_sysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Spatial_ref_sysAggregateArgs>(args: Subset<T, Spatial_ref_sysAggregateArgs>): Prisma.PrismaPromise<GetSpatial_ref_sysAggregateType<T>>

    /**
     * Group by Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends spatial_ref_sysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spatial_ref_sysGroupByArgs['orderBy'] }
        : { orderBy?: spatial_ref_sysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, spatial_ref_sysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpatial_ref_sysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spatial_ref_sys model
   */
  readonly fields: spatial_ref_sysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spatial_ref_sys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spatial_ref_sysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the spatial_ref_sys model
   */
  interface spatial_ref_sysFieldRefs {
    readonly srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly auth_name: FieldRef<"spatial_ref_sys", 'String'>
    readonly auth_srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly srtext: FieldRef<"spatial_ref_sys", 'String'>
    readonly proj4text: FieldRef<"spatial_ref_sys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * spatial_ref_sys findUnique
   */
  export type spatial_ref_sysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findUniqueOrThrow
   */
  export type spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findFirst
   */
  export type spatial_ref_sysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findFirstOrThrow
   */
  export type spatial_ref_sysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findMany
   */
  export type spatial_ref_sysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys create
   */
  export type spatial_ref_sysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to create a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
  }

  /**
   * spatial_ref_sys createMany
   */
  export type spatial_ref_sysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys createManyAndReturn
   */
  export type spatial_ref_sysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys update
   */
  export type spatial_ref_sysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to update a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
    /**
     * Choose, which spatial_ref_sys to update.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys updateMany
   */
  export type spatial_ref_sysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys updateManyAndReturn
   */
  export type spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys upsert
   */
  export type spatial_ref_sysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The filter to search for the spatial_ref_sys to update in case it exists.
     */
    where: spatial_ref_sysWhereUniqueInput
    /**
     * In case the spatial_ref_sys found by the `where` argument doesn't exist, create a new spatial_ref_sys with this data.
     */
    create: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
    /**
     * In case the spatial_ref_sys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
  }

  /**
   * spatial_ref_sys delete
   */
  export type spatial_ref_sysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter which spatial_ref_sys to delete.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys deleteMany
   */
  export type spatial_ref_sysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to delete
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to delete.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys without action
   */
  export type spatial_ref_sysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
  }


  /**
   * Model tipo_evento
   */

  export type AggregateTipo_evento = {
    _count: Tipo_eventoCountAggregateOutputType | null
    _avg: Tipo_eventoAvgAggregateOutputType | null
    _sum: Tipo_eventoSumAggregateOutputType | null
    _min: Tipo_eventoMinAggregateOutputType | null
    _max: Tipo_eventoMaxAggregateOutputType | null
  }

  export type Tipo_eventoAvgAggregateOutputType = {
    id_tipo_evento: number | null
  }

  export type Tipo_eventoSumAggregateOutputType = {
    id_tipo_evento: number | null
  }

  export type Tipo_eventoMinAggregateOutputType = {
    id_tipo_evento: number | null
    nombre: string | null
  }

  export type Tipo_eventoMaxAggregateOutputType = {
    id_tipo_evento: number | null
    nombre: string | null
  }

  export type Tipo_eventoCountAggregateOutputType = {
    id_tipo_evento: number
    nombre: number
    _all: number
  }


  export type Tipo_eventoAvgAggregateInputType = {
    id_tipo_evento?: true
  }

  export type Tipo_eventoSumAggregateInputType = {
    id_tipo_evento?: true
  }

  export type Tipo_eventoMinAggregateInputType = {
    id_tipo_evento?: true
    nombre?: true
  }

  export type Tipo_eventoMaxAggregateInputType = {
    id_tipo_evento?: true
    nombre?: true
  }

  export type Tipo_eventoCountAggregateInputType = {
    id_tipo_evento?: true
    nombre?: true
    _all?: true
  }

  export type Tipo_eventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_evento to aggregate.
     */
    where?: tipo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_eventos to fetch.
     */
    orderBy?: tipo_eventoOrderByWithRelationInput | tipo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_eventos
    **/
    _count?: true | Tipo_eventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_eventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_eventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_eventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_eventoMaxAggregateInputType
  }

  export type GetTipo_eventoAggregateType<T extends Tipo_eventoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_evento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_evento[P]>
      : GetScalarType<T[P], AggregateTipo_evento[P]>
  }




  export type tipo_eventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_eventoWhereInput
    orderBy?: tipo_eventoOrderByWithAggregationInput | tipo_eventoOrderByWithAggregationInput[]
    by: Tipo_eventoScalarFieldEnum[] | Tipo_eventoScalarFieldEnum
    having?: tipo_eventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_eventoCountAggregateInputType | true
    _avg?: Tipo_eventoAvgAggregateInputType
    _sum?: Tipo_eventoSumAggregateInputType
    _min?: Tipo_eventoMinAggregateInputType
    _max?: Tipo_eventoMaxAggregateInputType
  }

  export type Tipo_eventoGroupByOutputType = {
    id_tipo_evento: number
    nombre: string
    _count: Tipo_eventoCountAggregateOutputType | null
    _avg: Tipo_eventoAvgAggregateOutputType | null
    _sum: Tipo_eventoSumAggregateOutputType | null
    _min: Tipo_eventoMinAggregateOutputType | null
    _max: Tipo_eventoMaxAggregateOutputType | null
  }

  type GetTipo_eventoGroupByPayload<T extends tipo_eventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_eventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_eventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_eventoGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_eventoGroupByOutputType[P]>
        }
      >
    >


  export type tipo_eventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_evento?: boolean
    nombre?: boolean
    eventos?: boolean | tipo_evento$eventosArgs<ExtArgs>
    _count?: boolean | Tipo_eventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_evento"]>

  export type tipo_eventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_evento?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipo_evento"]>

  export type tipo_eventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_evento?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipo_evento"]>

  export type tipo_eventoSelectScalar = {
    id_tipo_evento?: boolean
    nombre?: boolean
  }

  export type tipo_eventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_evento" | "nombre", ExtArgs["result"]["tipo_evento"]>
  export type tipo_eventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | tipo_evento$eventosArgs<ExtArgs>
    _count?: boolean | Tipo_eventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipo_eventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipo_eventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipo_eventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_evento"
    objects: {
      eventos: Prisma.$eventosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_evento: number
      nombre: string
    }, ExtArgs["result"]["tipo_evento"]>
    composites: {}
  }

  type tipo_eventoGetPayload<S extends boolean | null | undefined | tipo_eventoDefaultArgs> = $Result.GetResult<Prisma.$tipo_eventoPayload, S>

  type tipo_eventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_eventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_eventoCountAggregateInputType | true
    }

  export interface tipo_eventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_evento'], meta: { name: 'tipo_evento' } }
    /**
     * Find zero or one Tipo_evento that matches the filter.
     * @param {tipo_eventoFindUniqueArgs} args - Arguments to find a Tipo_evento
     * @example
     * // Get one Tipo_evento
     * const tipo_evento = await prisma.tipo_evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_eventoFindUniqueArgs>(args: SelectSubset<T, tipo_eventoFindUniqueArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_eventoFindUniqueOrThrowArgs} args - Arguments to find a Tipo_evento
     * @example
     * // Get one Tipo_evento
     * const tipo_evento = await prisma.tipo_evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_eventoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_eventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_eventoFindFirstArgs} args - Arguments to find a Tipo_evento
     * @example
     * // Get one Tipo_evento
     * const tipo_evento = await prisma.tipo_evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_eventoFindFirstArgs>(args?: SelectSubset<T, tipo_eventoFindFirstArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_eventoFindFirstOrThrowArgs} args - Arguments to find a Tipo_evento
     * @example
     * // Get one Tipo_evento
     * const tipo_evento = await prisma.tipo_evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_eventoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_eventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_eventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_eventos
     * const tipo_eventos = await prisma.tipo_evento.findMany()
     * 
     * // Get first 10 Tipo_eventos
     * const tipo_eventos = await prisma.tipo_evento.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_evento`
     * const tipo_eventoWithId_tipo_eventoOnly = await prisma.tipo_evento.findMany({ select: { id_tipo_evento: true } })
     * 
     */
    findMany<T extends tipo_eventoFindManyArgs>(args?: SelectSubset<T, tipo_eventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_evento.
     * @param {tipo_eventoCreateArgs} args - Arguments to create a Tipo_evento.
     * @example
     * // Create one Tipo_evento
     * const Tipo_evento = await prisma.tipo_evento.create({
     *   data: {
     *     // ... data to create a Tipo_evento
     *   }
     * })
     * 
     */
    create<T extends tipo_eventoCreateArgs>(args: SelectSubset<T, tipo_eventoCreateArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_eventos.
     * @param {tipo_eventoCreateManyArgs} args - Arguments to create many Tipo_eventos.
     * @example
     * // Create many Tipo_eventos
     * const tipo_evento = await prisma.tipo_evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_eventoCreateManyArgs>(args?: SelectSubset<T, tipo_eventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipo_eventos and returns the data saved in the database.
     * @param {tipo_eventoCreateManyAndReturnArgs} args - Arguments to create many Tipo_eventos.
     * @example
     * // Create many Tipo_eventos
     * const tipo_evento = await prisma.tipo_evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipo_eventos and only return the `id_tipo_evento`
     * const tipo_eventoWithId_tipo_eventoOnly = await prisma.tipo_evento.createManyAndReturn({
     *   select: { id_tipo_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipo_eventoCreateManyAndReturnArgs>(args?: SelectSubset<T, tipo_eventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo_evento.
     * @param {tipo_eventoDeleteArgs} args - Arguments to delete one Tipo_evento.
     * @example
     * // Delete one Tipo_evento
     * const Tipo_evento = await prisma.tipo_evento.delete({
     *   where: {
     *     // ... filter to delete one Tipo_evento
     *   }
     * })
     * 
     */
    delete<T extends tipo_eventoDeleteArgs>(args: SelectSubset<T, tipo_eventoDeleteArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_evento.
     * @param {tipo_eventoUpdateArgs} args - Arguments to update one Tipo_evento.
     * @example
     * // Update one Tipo_evento
     * const tipo_evento = await prisma.tipo_evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_eventoUpdateArgs>(args: SelectSubset<T, tipo_eventoUpdateArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_eventos.
     * @param {tipo_eventoDeleteManyArgs} args - Arguments to filter Tipo_eventos to delete.
     * @example
     * // Delete a few Tipo_eventos
     * const { count } = await prisma.tipo_evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_eventoDeleteManyArgs>(args?: SelectSubset<T, tipo_eventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_eventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_eventos
     * const tipo_evento = await prisma.tipo_evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_eventoUpdateManyArgs>(args: SelectSubset<T, tipo_eventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_eventos and returns the data updated in the database.
     * @param {tipo_eventoUpdateManyAndReturnArgs} args - Arguments to update many Tipo_eventos.
     * @example
     * // Update many Tipo_eventos
     * const tipo_evento = await prisma.tipo_evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipo_eventos and only return the `id_tipo_evento`
     * const tipo_eventoWithId_tipo_eventoOnly = await prisma.tipo_evento.updateManyAndReturn({
     *   select: { id_tipo_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipo_eventoUpdateManyAndReturnArgs>(args: SelectSubset<T, tipo_eventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo_evento.
     * @param {tipo_eventoUpsertArgs} args - Arguments to update or create a Tipo_evento.
     * @example
     * // Update or create a Tipo_evento
     * const tipo_evento = await prisma.tipo_evento.upsert({
     *   create: {
     *     // ... data to create a Tipo_evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_evento we want to update
     *   }
     * })
     */
    upsert<T extends tipo_eventoUpsertArgs>(args: SelectSubset<T, tipo_eventoUpsertArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_eventoCountArgs} args - Arguments to filter Tipo_eventos to count.
     * @example
     * // Count the number of Tipo_eventos
     * const count = await prisma.tipo_evento.count({
     *   where: {
     *     // ... the filter for the Tipo_eventos we want to count
     *   }
     * })
    **/
    count<T extends tipo_eventoCountArgs>(
      args?: Subset<T, tipo_eventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_eventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_eventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_eventoAggregateArgs>(args: Subset<T, Tipo_eventoAggregateArgs>): Prisma.PrismaPromise<GetTipo_eventoAggregateType<T>>

    /**
     * Group by Tipo_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_eventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipo_eventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_eventoGroupByArgs['orderBy'] }
        : { orderBy?: tipo_eventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipo_eventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_eventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_evento model
   */
  readonly fields: tipo_eventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_eventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends tipo_evento$eventosArgs<ExtArgs> = {}>(args?: Subset<T, tipo_evento$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipo_evento model
   */
  interface tipo_eventoFieldRefs {
    readonly id_tipo_evento: FieldRef<"tipo_evento", 'Int'>
    readonly nombre: FieldRef<"tipo_evento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_evento findUnique
   */
  export type tipo_eventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_evento to fetch.
     */
    where: tipo_eventoWhereUniqueInput
  }

  /**
   * tipo_evento findUniqueOrThrow
   */
  export type tipo_eventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_evento to fetch.
     */
    where: tipo_eventoWhereUniqueInput
  }

  /**
   * tipo_evento findFirst
   */
  export type tipo_eventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_evento to fetch.
     */
    where?: tipo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_eventos to fetch.
     */
    orderBy?: tipo_eventoOrderByWithRelationInput | tipo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_eventos.
     */
    cursor?: tipo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_eventos.
     */
    distinct?: Tipo_eventoScalarFieldEnum | Tipo_eventoScalarFieldEnum[]
  }

  /**
   * tipo_evento findFirstOrThrow
   */
  export type tipo_eventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_evento to fetch.
     */
    where?: tipo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_eventos to fetch.
     */
    orderBy?: tipo_eventoOrderByWithRelationInput | tipo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_eventos.
     */
    cursor?: tipo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_eventos.
     */
    distinct?: Tipo_eventoScalarFieldEnum | Tipo_eventoScalarFieldEnum[]
  }

  /**
   * tipo_evento findMany
   */
  export type tipo_eventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_eventos to fetch.
     */
    where?: tipo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_eventos to fetch.
     */
    orderBy?: tipo_eventoOrderByWithRelationInput | tipo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_eventos.
     */
    cursor?: tipo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_eventos.
     */
    skip?: number
    distinct?: Tipo_eventoScalarFieldEnum | Tipo_eventoScalarFieldEnum[]
  }

  /**
   * tipo_evento create
   */
  export type tipo_eventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_evento.
     */
    data: XOR<tipo_eventoCreateInput, tipo_eventoUncheckedCreateInput>
  }

  /**
   * tipo_evento createMany
   */
  export type tipo_eventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_eventos.
     */
    data: tipo_eventoCreateManyInput | tipo_eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_evento createManyAndReturn
   */
  export type tipo_eventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * The data used to create many tipo_eventos.
     */
    data: tipo_eventoCreateManyInput | tipo_eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_evento update
   */
  export type tipo_eventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_evento.
     */
    data: XOR<tipo_eventoUpdateInput, tipo_eventoUncheckedUpdateInput>
    /**
     * Choose, which tipo_evento to update.
     */
    where: tipo_eventoWhereUniqueInput
  }

  /**
   * tipo_evento updateMany
   */
  export type tipo_eventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_eventos.
     */
    data: XOR<tipo_eventoUpdateManyMutationInput, tipo_eventoUncheckedUpdateManyInput>
    /**
     * Filter which tipo_eventos to update
     */
    where?: tipo_eventoWhereInput
    /**
     * Limit how many tipo_eventos to update.
     */
    limit?: number
  }

  /**
   * tipo_evento updateManyAndReturn
   */
  export type tipo_eventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * The data used to update tipo_eventos.
     */
    data: XOR<tipo_eventoUpdateManyMutationInput, tipo_eventoUncheckedUpdateManyInput>
    /**
     * Filter which tipo_eventos to update
     */
    where?: tipo_eventoWhereInput
    /**
     * Limit how many tipo_eventos to update.
     */
    limit?: number
  }

  /**
   * tipo_evento upsert
   */
  export type tipo_eventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_evento to update in case it exists.
     */
    where: tipo_eventoWhereUniqueInput
    /**
     * In case the tipo_evento found by the `where` argument doesn't exist, create a new tipo_evento with this data.
     */
    create: XOR<tipo_eventoCreateInput, tipo_eventoUncheckedCreateInput>
    /**
     * In case the tipo_evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_eventoUpdateInput, tipo_eventoUncheckedUpdateInput>
  }

  /**
   * tipo_evento delete
   */
  export type tipo_eventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    /**
     * Filter which tipo_evento to delete.
     */
    where: tipo_eventoWhereUniqueInput
  }

  /**
   * tipo_evento deleteMany
   */
  export type tipo_eventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_eventos to delete
     */
    where?: tipo_eventoWhereInput
    /**
     * Limit how many tipo_eventos to delete.
     */
    limit?: number
  }

  /**
   * tipo_evento.eventos
   */
  export type tipo_evento$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    cursor?: eventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * tipo_evento without action
   */
  export type tipo_eventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
  }


  /**
   * Model ubicacion
   */

  export type AggregateUbicacion = {
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  export type UbicacionAvgAggregateOutputType = {
    id_ubicacion: number | null
    id_usuario: number | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type UbicacionSumAggregateOutputType = {
    id_ubicacion: number | null
    id_usuario: number | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type UbicacionMinAggregateOutputType = {
    id_ubicacion: number | null
    id_usuario: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    nombre: string | null
  }

  export type UbicacionMaxAggregateOutputType = {
    id_ubicacion: number | null
    id_usuario: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    nombre: string | null
  }

  export type UbicacionCountAggregateOutputType = {
    id_ubicacion: number
    id_usuario: number
    latitud: number
    longitud: number
    nombre: number
    _all: number
  }


  export type UbicacionAvgAggregateInputType = {
    id_ubicacion?: true
    id_usuario?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionSumAggregateInputType = {
    id_ubicacion?: true
    id_usuario?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionMinAggregateInputType = {
    id_ubicacion?: true
    id_usuario?: true
    latitud?: true
    longitud?: true
    nombre?: true
  }

  export type UbicacionMaxAggregateInputType = {
    id_ubicacion?: true
    id_usuario?: true
    latitud?: true
    longitud?: true
    nombre?: true
  }

  export type UbicacionCountAggregateInputType = {
    id_ubicacion?: true
    id_usuario?: true
    latitud?: true
    longitud?: true
    nombre?: true
    _all?: true
  }

  export type UbicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ubicacion to aggregate.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ubicacions
    **/
    _count?: true | UbicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionMaxAggregateInputType
  }

  export type GetUbicacionAggregateType<T extends UbicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacion[P]>
      : GetScalarType<T[P], AggregateUbicacion[P]>
  }




  export type ubicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ubicacionWhereInput
    orderBy?: ubicacionOrderByWithAggregationInput | ubicacionOrderByWithAggregationInput[]
    by: UbicacionScalarFieldEnum[] | UbicacionScalarFieldEnum
    having?: ubicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionCountAggregateInputType | true
    _avg?: UbicacionAvgAggregateInputType
    _sum?: UbicacionSumAggregateInputType
    _min?: UbicacionMinAggregateInputType
    _max?: UbicacionMaxAggregateInputType
  }

  export type UbicacionGroupByOutputType = {
    id_ubicacion: number
    id_usuario: number | null
    latitud: Decimal
    longitud: Decimal
    nombre: string | null
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  type GetUbicacionGroupByPayload<T extends ubicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
        }
      >
    >


  export type ubicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ubicacion?: boolean
    id_usuario?: boolean
    latitud?: boolean
    longitud?: boolean
    nombre?: boolean
    rutas_rutas_id_destinoToubicacion?: boolean | ubicacion$rutas_rutas_id_destinoToubicacionArgs<ExtArgs>
    rutas_rutas_id_origenToubicacion?: boolean | ubicacion$rutas_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | ubicacion$usuariosArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type ubicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ubicacion?: boolean
    id_usuario?: boolean
    latitud?: boolean
    longitud?: boolean
    nombre?: boolean
    usuarios?: boolean | ubicacion$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type ubicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ubicacion?: boolean
    id_usuario?: boolean
    latitud?: boolean
    longitud?: boolean
    nombre?: boolean
    usuarios?: boolean | ubicacion$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type ubicacionSelectScalar = {
    id_ubicacion?: boolean
    id_usuario?: boolean
    latitud?: boolean
    longitud?: boolean
    nombre?: boolean
  }

  export type ubicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ubicacion" | "id_usuario" | "latitud" | "longitud" | "nombre", ExtArgs["result"]["ubicacion"]>
  export type ubicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutas_rutas_id_destinoToubicacion?: boolean | ubicacion$rutas_rutas_id_destinoToubicacionArgs<ExtArgs>
    rutas_rutas_id_origenToubicacion?: boolean | ubicacion$rutas_rutas_id_origenToubicacionArgs<ExtArgs>
    usuarios?: boolean | ubicacion$usuariosArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ubicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ubicacion$usuariosArgs<ExtArgs>
  }
  export type ubicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ubicacion$usuariosArgs<ExtArgs>
  }

  export type $ubicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ubicacion"
    objects: {
      rutas_rutas_id_destinoToubicacion: Prisma.$rutasPayload<ExtArgs>[]
      rutas_rutas_id_origenToubicacion: Prisma.$rutasPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ubicacion: number
      id_usuario: number | null
      latitud: Prisma.Decimal
      longitud: Prisma.Decimal
      nombre: string | null
    }, ExtArgs["result"]["ubicacion"]>
    composites: {}
  }

  type ubicacionGetPayload<S extends boolean | null | undefined | ubicacionDefaultArgs> = $Result.GetResult<Prisma.$ubicacionPayload, S>

  type ubicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ubicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionCountAggregateInputType | true
    }

  export interface ubicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ubicacion'], meta: { name: 'ubicacion' } }
    /**
     * Find zero or one Ubicacion that matches the filter.
     * @param {ubicacionFindUniqueArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ubicacionFindUniqueArgs>(args: SelectSubset<T, ubicacionFindUniqueArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ubicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ubicacionFindUniqueOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ubicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ubicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindFirstArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ubicacionFindFirstArgs>(args?: SelectSubset<T, ubicacionFindFirstArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindFirstOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ubicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ubicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ubicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany()
     * 
     * // Get first 10 Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany({ take: 10 })
     * 
     * // Only select the `id_ubicacion`
     * const ubicacionWithId_ubicacionOnly = await prisma.ubicacion.findMany({ select: { id_ubicacion: true } })
     * 
     */
    findMany<T extends ubicacionFindManyArgs>(args?: SelectSubset<T, ubicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ubicacion.
     * @param {ubicacionCreateArgs} args - Arguments to create a Ubicacion.
     * @example
     * // Create one Ubicacion
     * const Ubicacion = await prisma.ubicacion.create({
     *   data: {
     *     // ... data to create a Ubicacion
     *   }
     * })
     * 
     */
    create<T extends ubicacionCreateArgs>(args: SelectSubset<T, ubicacionCreateArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ubicacions.
     * @param {ubicacionCreateManyArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ubicacionCreateManyArgs>(args?: SelectSubset<T, ubicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ubicacions and returns the data saved in the database.
     * @param {ubicacionCreateManyAndReturnArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ubicacions and only return the `id_ubicacion`
     * const ubicacionWithId_ubicacionOnly = await prisma.ubicacion.createManyAndReturn({
     *   select: { id_ubicacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ubicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ubicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ubicacion.
     * @param {ubicacionDeleteArgs} args - Arguments to delete one Ubicacion.
     * @example
     * // Delete one Ubicacion
     * const Ubicacion = await prisma.ubicacion.delete({
     *   where: {
     *     // ... filter to delete one Ubicacion
     *   }
     * })
     * 
     */
    delete<T extends ubicacionDeleteArgs>(args: SelectSubset<T, ubicacionDeleteArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ubicacion.
     * @param {ubicacionUpdateArgs} args - Arguments to update one Ubicacion.
     * @example
     * // Update one Ubicacion
     * const ubicacion = await prisma.ubicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ubicacionUpdateArgs>(args: SelectSubset<T, ubicacionUpdateArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ubicacions.
     * @param {ubicacionDeleteManyArgs} args - Arguments to filter Ubicacions to delete.
     * @example
     * // Delete a few Ubicacions
     * const { count } = await prisma.ubicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ubicacionDeleteManyArgs>(args?: SelectSubset<T, ubicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ubicacionUpdateManyArgs>(args: SelectSubset<T, ubicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions and returns the data updated in the database.
     * @param {ubicacionUpdateManyAndReturnArgs} args - Arguments to update many Ubicacions.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ubicacions and only return the `id_ubicacion`
     * const ubicacionWithId_ubicacionOnly = await prisma.ubicacion.updateManyAndReturn({
     *   select: { id_ubicacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ubicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ubicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ubicacion.
     * @param {ubicacionUpsertArgs} args - Arguments to update or create a Ubicacion.
     * @example
     * // Update or create a Ubicacion
     * const ubicacion = await prisma.ubicacion.upsert({
     *   create: {
     *     // ... data to create a Ubicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ubicacion we want to update
     *   }
     * })
     */
    upsert<T extends ubicacionUpsertArgs>(args: SelectSubset<T, ubicacionUpsertArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionCountArgs} args - Arguments to filter Ubicacions to count.
     * @example
     * // Count the number of Ubicacions
     * const count = await prisma.ubicacion.count({
     *   where: {
     *     // ... the filter for the Ubicacions we want to count
     *   }
     * })
    **/
    count<T extends ubicacionCountArgs>(
      args?: Subset<T, ubicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UbicacionAggregateArgs>(args: Subset<T, UbicacionAggregateArgs>): Prisma.PrismaPromise<GetUbicacionAggregateType<T>>

    /**
     * Group by Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ubicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ubicacionGroupByArgs['orderBy'] }
        : { orderBy?: ubicacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ubicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ubicacion model
   */
  readonly fields: ubicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ubicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ubicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutas_rutas_id_destinoToubicacion<T extends ubicacion$rutas_rutas_id_destinoToubicacionArgs<ExtArgs> = {}>(args?: Subset<T, ubicacion$rutas_rutas_id_destinoToubicacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rutas_rutas_id_origenToubicacion<T extends ubicacion$rutas_rutas_id_origenToubicacionArgs<ExtArgs> = {}>(args?: Subset<T, ubicacion$rutas_rutas_id_origenToubicacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends ubicacion$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, ubicacion$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ubicacion model
   */
  interface ubicacionFieldRefs {
    readonly id_ubicacion: FieldRef<"ubicacion", 'Int'>
    readonly id_usuario: FieldRef<"ubicacion", 'Int'>
    readonly latitud: FieldRef<"ubicacion", 'Decimal'>
    readonly longitud: FieldRef<"ubicacion", 'Decimal'>
    readonly nombre: FieldRef<"ubicacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ubicacion findUnique
   */
  export type ubicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion findUniqueOrThrow
   */
  export type ubicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion findFirst
   */
  export type ubicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion findFirstOrThrow
   */
  export type ubicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion findMany
   */
  export type ubicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacions to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion create
   */
  export type ubicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a ubicacion.
     */
    data: XOR<ubicacionCreateInput, ubicacionUncheckedCreateInput>
  }

  /**
   * ubicacion createMany
   */
  export type ubicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ubicacions.
     */
    data: ubicacionCreateManyInput | ubicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ubicacion createManyAndReturn
   */
  export type ubicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * The data used to create many ubicacions.
     */
    data: ubicacionCreateManyInput | ubicacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ubicacion update
   */
  export type ubicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a ubicacion.
     */
    data: XOR<ubicacionUpdateInput, ubicacionUncheckedUpdateInput>
    /**
     * Choose, which ubicacion to update.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion updateMany
   */
  export type ubicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ubicacions.
     */
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyInput>
    /**
     * Filter which ubicacions to update
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to update.
     */
    limit?: number
  }

  /**
   * ubicacion updateManyAndReturn
   */
  export type ubicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * The data used to update ubicacions.
     */
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyInput>
    /**
     * Filter which ubicacions to update
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ubicacion upsert
   */
  export type ubicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the ubicacion to update in case it exists.
     */
    where: ubicacionWhereUniqueInput
    /**
     * In case the ubicacion found by the `where` argument doesn't exist, create a new ubicacion with this data.
     */
    create: XOR<ubicacionCreateInput, ubicacionUncheckedCreateInput>
    /**
     * In case the ubicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ubicacionUpdateInput, ubicacionUncheckedUpdateInput>
  }

  /**
   * ubicacion delete
   */
  export type ubicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter which ubicacion to delete.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion deleteMany
   */
  export type ubicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ubicacions to delete
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to delete.
     */
    limit?: number
  }

  /**
   * ubicacion.rutas_rutas_id_destinoToubicacion
   */
  export type ubicacion$rutas_rutas_id_destinoToubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    where?: rutasWhereInput
    orderBy?: rutasOrderByWithRelationInput | rutasOrderByWithRelationInput[]
    cursor?: rutasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutasScalarFieldEnum | RutasScalarFieldEnum[]
  }

  /**
   * ubicacion.rutas_rutas_id_origenToubicacion
   */
  export type ubicacion$rutas_rutas_id_origenToubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    where?: rutasWhereInput
    orderBy?: rutasOrderByWithRelationInput | rutasOrderByWithRelationInput[]
    cursor?: rutasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutasScalarFieldEnum | RutasScalarFieldEnum[]
  }

  /**
   * ubicacion.usuarios
   */
  export type ubicacion$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * ubicacion without action
   */
  export type ubicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    clave: string | null
    rol: string | null
    correo: string | null
    fecha_registro: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    clave: string | null
    rol: string | null
    correo: string | null
    fecha_registro: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nombre_usuario: number
    clave: number
    rol: number
    correo: number
    fecha_registro: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    clave?: true
    rol?: true
    correo?: true
    fecha_registro?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    clave?: true
    rol?: true
    correo?: true
    fecha_registro?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    clave?: true
    rol?: true
    correo?: true
    fecha_registro?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    nombre_usuario: string
    clave: string
    rol: string | null
    correo: string
    fecha_registro: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave?: boolean
    rol?: boolean
    correo?: boolean
    fecha_registro?: boolean
    calificacion?: boolean | usuarios$calificacionArgs<ExtArgs>
    eventos?: boolean | usuarios$eventosArgs<ExtArgs>
    rutas?: boolean | usuarios$rutasArgs<ExtArgs>
    ubicacion?: boolean | usuarios$ubicacionArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave?: boolean
    rol?: boolean
    correo?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave?: boolean
    rol?: boolean
    correo?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave?: boolean
    rol?: boolean
    correo?: boolean
    fecha_registro?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre_usuario" | "clave" | "rol" | "correo" | "fecha_registro", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calificacion?: boolean | usuarios$calificacionArgs<ExtArgs>
    eventos?: boolean | usuarios$eventosArgs<ExtArgs>
    rutas?: boolean | usuarios$rutasArgs<ExtArgs>
    ubicacion?: boolean | usuarios$ubicacionArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      calificacion: Prisma.$calificacionPayload<ExtArgs>[]
      eventos: Prisma.$eventosPayload<ExtArgs>[]
      rutas: Prisma.$rutasPayload<ExtArgs>[]
      ubicacion: Prisma.$ubicacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre_usuario: string
      clave: string
      rol: string | null
      correo: string
      fecha_registro: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calificacion<T extends usuarios$calificacionArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$calificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends usuarios$eventosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rutas<T extends usuarios$rutasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$rutasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rutasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ubicacion<T extends usuarios$ubicacionArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$ubicacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nombre_usuario: FieldRef<"usuarios", 'String'>
    readonly clave: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'String'>
    readonly correo: FieldRef<"usuarios", 'String'>
    readonly fecha_registro: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.calificacion
   */
  export type usuarios$calificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    where?: calificacionWhereInput
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    cursor?: calificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * usuarios.eventos
   */
  export type usuarios$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    cursor?: eventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * usuarios.rutas
   */
  export type usuarios$rutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rutas
     */
    select?: rutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rutas
     */
    omit?: rutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rutasInclude<ExtArgs> | null
    where?: rutasWhereInput
    orderBy?: rutasOrderByWithRelationInput | rutasOrderByWithRelationInput[]
    cursor?: rutasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutasScalarFieldEnum | RutasScalarFieldEnum[]
  }

  /**
   * usuarios.ubicacion
   */
  export type usuarios$ubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    where?: ubicacionWhereInput
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    cursor?: ubicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosAvgAggregateOutputType = {
    id_evento: number | null
    id_tipo_evento: number | null
    id_usuario: number | null
  }

  export type EventosSumAggregateOutputType = {
    id_evento: number | null
    id_tipo_evento: number | null
    id_usuario: number | null
  }

  export type EventosMinAggregateOutputType = {
    id_evento: number | null
    id_tipo_evento: number | null
    descripcion: string | null
    id_usuario: number | null
    fecha_registro: Date | null
  }

  export type EventosMaxAggregateOutputType = {
    id_evento: number | null
    id_tipo_evento: number | null
    descripcion: string | null
    id_usuario: number | null
    fecha_registro: Date | null
  }

  export type EventosCountAggregateOutputType = {
    id_evento: number
    id_tipo_evento: number
    descripcion: number
    id_usuario: number
    fecha_registro: number
    _all: number
  }


  export type EventosAvgAggregateInputType = {
    id_evento?: true
    id_tipo_evento?: true
    id_usuario?: true
  }

  export type EventosSumAggregateInputType = {
    id_evento?: true
    id_tipo_evento?: true
    id_usuario?: true
  }

  export type EventosMinAggregateInputType = {
    id_evento?: true
    id_tipo_evento?: true
    descripcion?: true
    id_usuario?: true
    fecha_registro?: true
  }

  export type EventosMaxAggregateInputType = {
    id_evento?: true
    id_tipo_evento?: true
    descripcion?: true
    id_usuario?: true
    fecha_registro?: true
  }

  export type EventosCountAggregateInputType = {
    id_evento?: true
    id_tipo_evento?: true
    descripcion?: true
    id_usuario?: true
    fecha_registro?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to aggregate.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithAggregationInput | eventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _avg?: EventosAvgAggregateInputType
    _sum?: EventosSumAggregateInputType
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id_evento: number
    id_tipo_evento: number | null
    descripcion: string | null
    id_usuario: number | null
    fecha_registro: Date | null
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_tipo_evento?: boolean
    descripcion?: boolean
    id_usuario?: boolean
    fecha_registro?: boolean
    tipo_evento?: boolean | eventos$tipo_eventoArgs<ExtArgs>
    usuarios?: boolean | eventos$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_tipo_evento?: boolean
    descripcion?: boolean
    id_usuario?: boolean
    fecha_registro?: boolean
    tipo_evento?: boolean | eventos$tipo_eventoArgs<ExtArgs>
    usuarios?: boolean | eventos$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_tipo_evento?: boolean
    descripcion?: boolean
    id_usuario?: boolean
    fecha_registro?: boolean
    tipo_evento?: boolean | eventos$tipo_eventoArgs<ExtArgs>
    usuarios?: boolean | eventos$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectScalar = {
    id_evento?: boolean
    id_tipo_evento?: boolean
    descripcion?: boolean
    id_usuario?: boolean
    fecha_registro?: boolean
  }

  export type eventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_tipo_evento" | "descripcion" | "id_usuario" | "fecha_registro", ExtArgs["result"]["eventos"]>
  export type eventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_evento?: boolean | eventos$tipo_eventoArgs<ExtArgs>
    usuarios?: boolean | eventos$usuariosArgs<ExtArgs>
  }
  export type eventosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_evento?: boolean | eventos$tipo_eventoArgs<ExtArgs>
    usuarios?: boolean | eventos$usuariosArgs<ExtArgs>
  }
  export type eventosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_evento?: boolean | eventos$tipo_eventoArgs<ExtArgs>
    usuarios?: boolean | eventos$usuariosArgs<ExtArgs>
  }

  export type $eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos"
    objects: {
      tipo_evento: Prisma.$tipo_eventoPayload<ExtArgs> | null
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      id_tipo_evento: number | null
      descripcion: string | null
      id_usuario: number | null
      fecha_registro: Date | null
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type eventosGetPayload<S extends boolean | null | undefined | eventosDefaultArgs> = $Result.GetResult<Prisma.$eventosPayload, S>

  type eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos'], meta: { name: 'eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {eventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventosFindUniqueArgs>(args: SelectSubset<T, eventosFindUniqueArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventosFindFirstArgs>(args?: SelectSubset<T, eventosFindFirstArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventosWithId_eventoOnly = await prisma.eventos.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends eventosFindManyArgs>(args?: SelectSubset<T, eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos.
     * @param {eventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends eventosCreateArgs>(args: SelectSubset<T, eventosCreateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {eventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventosCreateManyArgs>(args?: SelectSubset<T, eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {eventosCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id_evento`
     * const eventosWithId_eventoOnly = await prisma.eventos.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventosCreateManyAndReturnArgs>(args?: SelectSubset<T, eventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos.
     * @param {eventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends eventosDeleteArgs>(args: SelectSubset<T, eventosDeleteArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos.
     * @param {eventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventosUpdateArgs>(args: SelectSubset<T, eventosUpdateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {eventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventosDeleteManyArgs>(args?: SelectSubset<T, eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventosUpdateManyArgs>(args: SelectSubset<T, eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {eventosUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id_evento`
     * const eventosWithId_eventoOnly = await prisma.eventos.updateManyAndReturn({
     *   select: { id_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventosUpdateManyAndReturnArgs>(args: SelectSubset<T, eventosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos.
     * @param {eventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends eventosUpsertArgs>(args: SelectSubset<T, eventosUpsertArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventosCountArgs>(
      args?: Subset<T, eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventosGroupByArgs['orderBy'] }
        : { orderBy?: eventosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos model
   */
  readonly fields: eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo_evento<T extends eventos$tipo_eventoArgs<ExtArgs> = {}>(args?: Subset<T, eventos$tipo_eventoArgs<ExtArgs>>): Prisma__tipo_eventoClient<$Result.GetResult<Prisma.$tipo_eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends eventos$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, eventos$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eventos model
   */
  interface eventosFieldRefs {
    readonly id_evento: FieldRef<"eventos", 'Int'>
    readonly id_tipo_evento: FieldRef<"eventos", 'Int'>
    readonly descripcion: FieldRef<"eventos", 'String'>
    readonly id_usuario: FieldRef<"eventos", 'Int'>
    readonly fecha_registro: FieldRef<"eventos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * eventos findUnique
   */
  export type eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findUniqueOrThrow
   */
  export type eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findFirst
   */
  export type eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findFirstOrThrow
   */
  export type eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findMany
   */
  export type eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos create
   */
  export type eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to create a eventos.
     */
    data?: XOR<eventosCreateInput, eventosUncheckedCreateInput>
  }

  /**
   * eventos createMany
   */
  export type eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos createManyAndReturn
   */
  export type eventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventos update
   */
  export type eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to update a eventos.
     */
    data: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
    /**
     * Choose, which eventos to update.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos updateMany
   */
  export type eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * eventos updateManyAndReturn
   */
  export type eventosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventos upsert
   */
  export type eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The filter to search for the eventos to update in case it exists.
     */
    where: eventosWhereUniqueInput
    /**
     * In case the eventos found by the `where` argument doesn't exist, create a new eventos with this data.
     */
    create: XOR<eventosCreateInput, eventosUncheckedCreateInput>
    /**
     * In case the eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
  }

  /**
   * eventos delete
   */
  export type eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter which eventos to delete.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos deleteMany
   */
  export type eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to delete.
     */
    limit?: number
  }

  /**
   * eventos.tipo_evento
   */
  export type eventos$tipo_eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_evento
     */
    select?: tipo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_evento
     */
    omit?: tipo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_eventoInclude<ExtArgs> | null
    where?: tipo_eventoWhereInput
  }

  /**
   * eventos.usuarios
   */
  export type eventos$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * eventos without action
   */
  export type eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CalificacionScalarFieldEnum: {
    id_calificacion: 'id_calificacion',
    id_usuario: 'id_usuario',
    calificacion: 'calificacion',
    comentario: 'comentario',
    id_evento: 'id_evento',
    id_zona_segura: 'id_zona_segura',
    tipo_calificacion: 'tipo_calificacion'
  };

  export type CalificacionScalarFieldEnum = (typeof CalificacionScalarFieldEnum)[keyof typeof CalificacionScalarFieldEnum]


  export const Detalle_rutaScalarFieldEnum: {
    id_detalle_ruta: 'id_detalle_ruta',
    id_ruta: 'id_ruta',
    id_zona_segura: 'id_zona_segura',
    id_evento: 'id_evento',
    fecha_registro: 'fecha_registro'
  };

  export type Detalle_rutaScalarFieldEnum = (typeof Detalle_rutaScalarFieldEnum)[keyof typeof Detalle_rutaScalarFieldEnum]


  export const RutasScalarFieldEnum: {
    id_ruta: 'id_ruta',
    id_usuario: 'id_usuario',
    riesgo: 'riesgo',
    id_origen: 'id_origen',
    id_destino: 'id_destino',
    favorito: 'favorito'
  };

  export type RutasScalarFieldEnum = (typeof RutasScalarFieldEnum)[keyof typeof RutasScalarFieldEnum]


  export const Spatial_ref_sysScalarFieldEnum: {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
  };

  export type Spatial_ref_sysScalarFieldEnum = (typeof Spatial_ref_sysScalarFieldEnum)[keyof typeof Spatial_ref_sysScalarFieldEnum]


  export const Tipo_eventoScalarFieldEnum: {
    id_tipo_evento: 'id_tipo_evento',
    nombre: 'nombre'
  };

  export type Tipo_eventoScalarFieldEnum = (typeof Tipo_eventoScalarFieldEnum)[keyof typeof Tipo_eventoScalarFieldEnum]


  export const UbicacionScalarFieldEnum: {
    id_ubicacion: 'id_ubicacion',
    id_usuario: 'id_usuario',
    latitud: 'latitud',
    longitud: 'longitud',
    nombre: 'nombre'
  };

  export type UbicacionScalarFieldEnum = (typeof UbicacionScalarFieldEnum)[keyof typeof UbicacionScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre_usuario: 'nombre_usuario',
    clave: 'clave',
    rol: 'rol',
    correo: 'correo',
    fecha_registro: 'fecha_registro'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const EventosScalarFieldEnum: {
    id_evento: 'id_evento',
    id_tipo_evento: 'id_tipo_evento',
    descripcion: 'descripcion',
    id_usuario: 'id_usuario',
    fecha_registro: 'fecha_registro'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type calificacionWhereInput = {
    AND?: calificacionWhereInput | calificacionWhereInput[]
    OR?: calificacionWhereInput[]
    NOT?: calificacionWhereInput | calificacionWhereInput[]
    id_calificacion?: IntFilter<"calificacion"> | number
    id_usuario?: IntNullableFilter<"calificacion"> | number | null
    calificacion?: IntNullableFilter<"calificacion"> | number | null
    comentario?: StringNullableFilter<"calificacion"> | string | null
    id_evento?: IntNullableFilter<"calificacion"> | number | null
    id_zona_segura?: IntNullableFilter<"calificacion"> | number | null
    tipo_calificacion?: StringNullableFilter<"calificacion"> | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type calificacionOrderByWithRelationInput = {
    id_calificacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    id_evento?: SortOrderInput | SortOrder
    id_zona_segura?: SortOrderInput | SortOrder
    tipo_calificacion?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type calificacionWhereUniqueInput = Prisma.AtLeast<{
    id_calificacion?: number
    AND?: calificacionWhereInput | calificacionWhereInput[]
    OR?: calificacionWhereInput[]
    NOT?: calificacionWhereInput | calificacionWhereInput[]
    id_usuario?: IntNullableFilter<"calificacion"> | number | null
    calificacion?: IntNullableFilter<"calificacion"> | number | null
    comentario?: StringNullableFilter<"calificacion"> | string | null
    id_evento?: IntNullableFilter<"calificacion"> | number | null
    id_zona_segura?: IntNullableFilter<"calificacion"> | number | null
    tipo_calificacion?: StringNullableFilter<"calificacion"> | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_calificacion">

  export type calificacionOrderByWithAggregationInput = {
    id_calificacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    id_evento?: SortOrderInput | SortOrder
    id_zona_segura?: SortOrderInput | SortOrder
    tipo_calificacion?: SortOrderInput | SortOrder
    _count?: calificacionCountOrderByAggregateInput
    _avg?: calificacionAvgOrderByAggregateInput
    _max?: calificacionMaxOrderByAggregateInput
    _min?: calificacionMinOrderByAggregateInput
    _sum?: calificacionSumOrderByAggregateInput
  }

  export type calificacionScalarWhereWithAggregatesInput = {
    AND?: calificacionScalarWhereWithAggregatesInput | calificacionScalarWhereWithAggregatesInput[]
    OR?: calificacionScalarWhereWithAggregatesInput[]
    NOT?: calificacionScalarWhereWithAggregatesInput | calificacionScalarWhereWithAggregatesInput[]
    id_calificacion?: IntWithAggregatesFilter<"calificacion"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"calificacion"> | number | null
    calificacion?: IntNullableWithAggregatesFilter<"calificacion"> | number | null
    comentario?: StringNullableWithAggregatesFilter<"calificacion"> | string | null
    id_evento?: IntNullableWithAggregatesFilter<"calificacion"> | number | null
    id_zona_segura?: IntNullableWithAggregatesFilter<"calificacion"> | number | null
    tipo_calificacion?: StringNullableWithAggregatesFilter<"calificacion"> | string | null
  }

  export type detalle_rutaWhereInput = {
    AND?: detalle_rutaWhereInput | detalle_rutaWhereInput[]
    OR?: detalle_rutaWhereInput[]
    NOT?: detalle_rutaWhereInput | detalle_rutaWhereInput[]
    id_detalle_ruta?: IntFilter<"detalle_ruta"> | number
    id_ruta?: IntNullableFilter<"detalle_ruta"> | number | null
    id_zona_segura?: IntNullableFilter<"detalle_ruta"> | number | null
    id_evento?: IntNullableFilter<"detalle_ruta"> | number | null
    fecha_registro?: DateTimeNullableFilter<"detalle_ruta"> | Date | string | null
    rutas?: XOR<RutasNullableScalarRelationFilter, rutasWhereInput> | null
  }

  export type detalle_rutaOrderByWithRelationInput = {
    id_detalle_ruta?: SortOrder
    id_ruta?: SortOrderInput | SortOrder
    id_zona_segura?: SortOrderInput | SortOrder
    id_evento?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    rutas?: rutasOrderByWithRelationInput
  }

  export type detalle_rutaWhereUniqueInput = Prisma.AtLeast<{
    id_detalle_ruta?: number
    AND?: detalle_rutaWhereInput | detalle_rutaWhereInput[]
    OR?: detalle_rutaWhereInput[]
    NOT?: detalle_rutaWhereInput | detalle_rutaWhereInput[]
    id_ruta?: IntNullableFilter<"detalle_ruta"> | number | null
    id_zona_segura?: IntNullableFilter<"detalle_ruta"> | number | null
    id_evento?: IntNullableFilter<"detalle_ruta"> | number | null
    fecha_registro?: DateTimeNullableFilter<"detalle_ruta"> | Date | string | null
    rutas?: XOR<RutasNullableScalarRelationFilter, rutasWhereInput> | null
  }, "id_detalle_ruta">

  export type detalle_rutaOrderByWithAggregationInput = {
    id_detalle_ruta?: SortOrder
    id_ruta?: SortOrderInput | SortOrder
    id_zona_segura?: SortOrderInput | SortOrder
    id_evento?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: detalle_rutaCountOrderByAggregateInput
    _avg?: detalle_rutaAvgOrderByAggregateInput
    _max?: detalle_rutaMaxOrderByAggregateInput
    _min?: detalle_rutaMinOrderByAggregateInput
    _sum?: detalle_rutaSumOrderByAggregateInput
  }

  export type detalle_rutaScalarWhereWithAggregatesInput = {
    AND?: detalle_rutaScalarWhereWithAggregatesInput | detalle_rutaScalarWhereWithAggregatesInput[]
    OR?: detalle_rutaScalarWhereWithAggregatesInput[]
    NOT?: detalle_rutaScalarWhereWithAggregatesInput | detalle_rutaScalarWhereWithAggregatesInput[]
    id_detalle_ruta?: IntWithAggregatesFilter<"detalle_ruta"> | number
    id_ruta?: IntNullableWithAggregatesFilter<"detalle_ruta"> | number | null
    id_zona_segura?: IntNullableWithAggregatesFilter<"detalle_ruta"> | number | null
    id_evento?: IntNullableWithAggregatesFilter<"detalle_ruta"> | number | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"detalle_ruta"> | Date | string | null
  }

  export type rutasWhereInput = {
    AND?: rutasWhereInput | rutasWhereInput[]
    OR?: rutasWhereInput[]
    NOT?: rutasWhereInput | rutasWhereInput[]
    id_ruta?: IntFilter<"rutas"> | number
    id_usuario?: IntNullableFilter<"rutas"> | number | null
    riesgo?: IntNullableFilter<"rutas"> | number | null
    id_origen?: IntNullableFilter<"rutas"> | number | null
    id_destino?: IntNullableFilter<"rutas"> | number | null
    favorito?: BoolNullableFilter<"rutas"> | boolean | null
    detalle_ruta?: Detalle_rutaListRelationFilter
    ubicacion_rutas_id_destinoToubicacion?: XOR<UbicacionNullableScalarRelationFilter, ubicacionWhereInput> | null
    ubicacion_rutas_id_origenToubicacion?: XOR<UbicacionNullableScalarRelationFilter, ubicacionWhereInput> | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type rutasOrderByWithRelationInput = {
    id_ruta?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    riesgo?: SortOrderInput | SortOrder
    id_origen?: SortOrderInput | SortOrder
    id_destino?: SortOrderInput | SortOrder
    favorito?: SortOrderInput | SortOrder
    detalle_ruta?: detalle_rutaOrderByRelationAggregateInput
    ubicacion_rutas_id_destinoToubicacion?: ubicacionOrderByWithRelationInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type rutasWhereUniqueInput = Prisma.AtLeast<{
    id_ruta?: number
    AND?: rutasWhereInput | rutasWhereInput[]
    OR?: rutasWhereInput[]
    NOT?: rutasWhereInput | rutasWhereInput[]
    id_usuario?: IntNullableFilter<"rutas"> | number | null
    riesgo?: IntNullableFilter<"rutas"> | number | null
    id_origen?: IntNullableFilter<"rutas"> | number | null
    id_destino?: IntNullableFilter<"rutas"> | number | null
    favorito?: BoolNullableFilter<"rutas"> | boolean | null
    detalle_ruta?: Detalle_rutaListRelationFilter
    ubicacion_rutas_id_destinoToubicacion?: XOR<UbicacionNullableScalarRelationFilter, ubicacionWhereInput> | null
    ubicacion_rutas_id_origenToubicacion?: XOR<UbicacionNullableScalarRelationFilter, ubicacionWhereInput> | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_ruta">

  export type rutasOrderByWithAggregationInput = {
    id_ruta?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    riesgo?: SortOrderInput | SortOrder
    id_origen?: SortOrderInput | SortOrder
    id_destino?: SortOrderInput | SortOrder
    favorito?: SortOrderInput | SortOrder
    _count?: rutasCountOrderByAggregateInput
    _avg?: rutasAvgOrderByAggregateInput
    _max?: rutasMaxOrderByAggregateInput
    _min?: rutasMinOrderByAggregateInput
    _sum?: rutasSumOrderByAggregateInput
  }

  export type rutasScalarWhereWithAggregatesInput = {
    AND?: rutasScalarWhereWithAggregatesInput | rutasScalarWhereWithAggregatesInput[]
    OR?: rutasScalarWhereWithAggregatesInput[]
    NOT?: rutasScalarWhereWithAggregatesInput | rutasScalarWhereWithAggregatesInput[]
    id_ruta?: IntWithAggregatesFilter<"rutas"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"rutas"> | number | null
    riesgo?: IntNullableWithAggregatesFilter<"rutas"> | number | null
    id_origen?: IntNullableWithAggregatesFilter<"rutas"> | number | null
    id_destino?: IntNullableWithAggregatesFilter<"rutas"> | number | null
    favorito?: BoolNullableWithAggregatesFilter<"rutas"> | boolean | null
  }

  export type spatial_ref_sysWhereInput = {
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    srid?: IntFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }

  export type spatial_ref_sysOrderByWithRelationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
  }

  export type spatial_ref_sysWhereUniqueInput = Prisma.AtLeast<{
    srid?: number
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }, "srid">

  export type spatial_ref_sysOrderByWithAggregationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
    _count?: spatial_ref_sysCountOrderByAggregateInput
    _avg?: spatial_ref_sysAvgOrderByAggregateInput
    _max?: spatial_ref_sysMaxOrderByAggregateInput
    _min?: spatial_ref_sysMinOrderByAggregateInput
    _sum?: spatial_ref_sysSumOrderByAggregateInput
  }

  export type spatial_ref_sysScalarWhereWithAggregatesInput = {
    AND?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    OR?: spatial_ref_sysScalarWhereWithAggregatesInput[]
    NOT?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    srid?: IntWithAggregatesFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableWithAggregatesFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
  }

  export type tipo_eventoWhereInput = {
    AND?: tipo_eventoWhereInput | tipo_eventoWhereInput[]
    OR?: tipo_eventoWhereInput[]
    NOT?: tipo_eventoWhereInput | tipo_eventoWhereInput[]
    id_tipo_evento?: IntFilter<"tipo_evento"> | number
    nombre?: StringFilter<"tipo_evento"> | string
    eventos?: EventosListRelationFilter
  }

  export type tipo_eventoOrderByWithRelationInput = {
    id_tipo_evento?: SortOrder
    nombre?: SortOrder
    eventos?: eventosOrderByRelationAggregateInput
  }

  export type tipo_eventoWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_evento?: number
    AND?: tipo_eventoWhereInput | tipo_eventoWhereInput[]
    OR?: tipo_eventoWhereInput[]
    NOT?: tipo_eventoWhereInput | tipo_eventoWhereInput[]
    nombre?: StringFilter<"tipo_evento"> | string
    eventos?: EventosListRelationFilter
  }, "id_tipo_evento">

  export type tipo_eventoOrderByWithAggregationInput = {
    id_tipo_evento?: SortOrder
    nombre?: SortOrder
    _count?: tipo_eventoCountOrderByAggregateInput
    _avg?: tipo_eventoAvgOrderByAggregateInput
    _max?: tipo_eventoMaxOrderByAggregateInput
    _min?: tipo_eventoMinOrderByAggregateInput
    _sum?: tipo_eventoSumOrderByAggregateInput
  }

  export type tipo_eventoScalarWhereWithAggregatesInput = {
    AND?: tipo_eventoScalarWhereWithAggregatesInput | tipo_eventoScalarWhereWithAggregatesInput[]
    OR?: tipo_eventoScalarWhereWithAggregatesInput[]
    NOT?: tipo_eventoScalarWhereWithAggregatesInput | tipo_eventoScalarWhereWithAggregatesInput[]
    id_tipo_evento?: IntWithAggregatesFilter<"tipo_evento"> | number
    nombre?: StringWithAggregatesFilter<"tipo_evento"> | string
  }

  export type ubicacionWhereInput = {
    AND?: ubicacionWhereInput | ubicacionWhereInput[]
    OR?: ubicacionWhereInput[]
    NOT?: ubicacionWhereInput | ubicacionWhereInput[]
    id_ubicacion?: IntFilter<"ubicacion"> | number
    id_usuario?: IntNullableFilter<"ubicacion"> | number | null
    latitud?: DecimalFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    nombre?: StringNullableFilter<"ubicacion"> | string | null
    rutas_rutas_id_destinoToubicacion?: RutasListRelationFilter
    rutas_rutas_id_origenToubicacion?: RutasListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type ubicacionOrderByWithRelationInput = {
    id_ubicacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    nombre?: SortOrderInput | SortOrder
    rutas_rutas_id_destinoToubicacion?: rutasOrderByRelationAggregateInput
    rutas_rutas_id_origenToubicacion?: rutasOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type ubicacionWhereUniqueInput = Prisma.AtLeast<{
    id_ubicacion?: number
    AND?: ubicacionWhereInput | ubicacionWhereInput[]
    OR?: ubicacionWhereInput[]
    NOT?: ubicacionWhereInput | ubicacionWhereInput[]
    id_usuario?: IntNullableFilter<"ubicacion"> | number | null
    latitud?: DecimalFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    nombre?: StringNullableFilter<"ubicacion"> | string | null
    rutas_rutas_id_destinoToubicacion?: RutasListRelationFilter
    rutas_rutas_id_origenToubicacion?: RutasListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_ubicacion">

  export type ubicacionOrderByWithAggregationInput = {
    id_ubicacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: ubicacionCountOrderByAggregateInput
    _avg?: ubicacionAvgOrderByAggregateInput
    _max?: ubicacionMaxOrderByAggregateInput
    _min?: ubicacionMinOrderByAggregateInput
    _sum?: ubicacionSumOrderByAggregateInput
  }

  export type ubicacionScalarWhereWithAggregatesInput = {
    AND?: ubicacionScalarWhereWithAggregatesInput | ubicacionScalarWhereWithAggregatesInput[]
    OR?: ubicacionScalarWhereWithAggregatesInput[]
    NOT?: ubicacionScalarWhereWithAggregatesInput | ubicacionScalarWhereWithAggregatesInput[]
    id_ubicacion?: IntWithAggregatesFilter<"ubicacion"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"ubicacion"> | number | null
    latitud?: DecimalWithAggregatesFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalWithAggregatesFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    nombre?: StringNullableWithAggregatesFilter<"ubicacion"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nombre_usuario?: StringFilter<"usuarios"> | string
    clave?: StringFilter<"usuarios"> | string
    rol?: StringNullableFilter<"usuarios"> | string | null
    correo?: StringFilter<"usuarios"> | string
    fecha_registro?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    calificacion?: CalificacionListRelationFilter
    eventos?: EventosListRelationFilter
    rutas?: RutasListRelationFilter
    ubicacion?: UbicacionListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave?: SortOrder
    rol?: SortOrderInput | SortOrder
    correo?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    calificacion?: calificacionOrderByRelationAggregateInput
    eventos?: eventosOrderByRelationAggregateInput
    rutas?: rutasOrderByRelationAggregateInput
    ubicacion?: ubicacionOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre_usuario?: StringFilter<"usuarios"> | string
    clave?: StringFilter<"usuarios"> | string
    rol?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    calificacion?: CalificacionListRelationFilter
    eventos?: EventosListRelationFilter
    rutas?: RutasListRelationFilter
    ubicacion?: UbicacionListRelationFilter
  }, "id_usuario" | "correo">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave?: SortOrder
    rol?: SortOrderInput | SortOrder
    correo?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nombre_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    clave?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    correo?: StringWithAggregatesFilter<"usuarios"> | string
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type eventosWhereInput = {
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    id_evento?: IntFilter<"eventos"> | number
    id_tipo_evento?: IntNullableFilter<"eventos"> | number | null
    descripcion?: StringNullableFilter<"eventos"> | string | null
    id_usuario?: IntNullableFilter<"eventos"> | number | null
    fecha_registro?: DateTimeNullableFilter<"eventos"> | Date | string | null
    tipo_evento?: XOR<Tipo_eventoNullableScalarRelationFilter, tipo_eventoWhereInput> | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type eventosOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_tipo_evento?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    tipo_evento?: tipo_eventoOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type eventosWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: number
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    id_tipo_evento?: IntNullableFilter<"eventos"> | number | null
    descripcion?: StringNullableFilter<"eventos"> | string | null
    id_usuario?: IntNullableFilter<"eventos"> | number | null
    fecha_registro?: DateTimeNullableFilter<"eventos"> | Date | string | null
    tipo_evento?: XOR<Tipo_eventoNullableScalarRelationFilter, tipo_eventoWhereInput> | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_evento">

  export type eventosOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_tipo_evento?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: eventosCountOrderByAggregateInput
    _avg?: eventosAvgOrderByAggregateInput
    _max?: eventosMaxOrderByAggregateInput
    _min?: eventosMinOrderByAggregateInput
    _sum?: eventosSumOrderByAggregateInput
  }

  export type eventosScalarWhereWithAggregatesInput = {
    AND?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    OR?: eventosScalarWhereWithAggregatesInput[]
    NOT?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"eventos"> | number
    id_tipo_evento?: IntNullableWithAggregatesFilter<"eventos"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    id_usuario?: IntNullableWithAggregatesFilter<"eventos"> | number | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"eventos"> | Date | string | null
  }

  export type calificacionCreateInput = {
    calificacion?: number | null
    comentario?: string | null
    id_evento?: number | null
    id_zona_segura?: number | null
    tipo_calificacion?: string | null
    usuarios?: usuariosCreateNestedOneWithoutCalificacionInput
  }

  export type calificacionUncheckedCreateInput = {
    id_calificacion?: number
    id_usuario?: number | null
    calificacion?: number | null
    comentario?: string | null
    id_evento?: number | null
    id_zona_segura?: number | null
    tipo_calificacion?: string | null
  }

  export type calificacionUpdateInput = {
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_calificacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneWithoutCalificacionNestedInput
  }

  export type calificacionUncheckedUpdateInput = {
    id_calificacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_calificacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calificacionCreateManyInput = {
    id_calificacion?: number
    id_usuario?: number | null
    calificacion?: number | null
    comentario?: string | null
    id_evento?: number | null
    id_zona_segura?: number | null
    tipo_calificacion?: string | null
  }

  export type calificacionUpdateManyMutationInput = {
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_calificacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calificacionUncheckedUpdateManyInput = {
    id_calificacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_calificacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_rutaCreateInput = {
    id_zona_segura?: number | null
    id_evento?: number | null
    fecha_registro?: Date | string | null
    rutas?: rutasCreateNestedOneWithoutDetalle_rutaInput
  }

  export type detalle_rutaUncheckedCreateInput = {
    id_detalle_ruta?: number
    id_ruta?: number | null
    id_zona_segura?: number | null
    id_evento?: number | null
    fecha_registro?: Date | string | null
  }

  export type detalle_rutaUpdateInput = {
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rutas?: rutasUpdateOneWithoutDetalle_rutaNestedInput
  }

  export type detalle_rutaUncheckedUpdateInput = {
    id_detalle_ruta?: IntFieldUpdateOperationsInput | number
    id_ruta?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_rutaCreateManyInput = {
    id_detalle_ruta?: number
    id_ruta?: number | null
    id_zona_segura?: number | null
    id_evento?: number | null
    fecha_registro?: Date | string | null
  }

  export type detalle_rutaUpdateManyMutationInput = {
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_rutaUncheckedUpdateManyInput = {
    id_detalle_ruta?: IntFieldUpdateOperationsInput | number
    id_ruta?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rutasCreateInput = {
    riesgo?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaCreateNestedManyWithoutRutasInput
    ubicacion_rutas_id_destinoToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_destinoToubicacionInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_origenToubicacionInput
    usuarios?: usuariosCreateNestedOneWithoutRutasInput
  }

  export type rutasUncheckedCreateInput = {
    id_ruta?: number
    id_usuario?: number | null
    riesgo?: number | null
    id_origen?: number | null
    id_destino?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaUncheckedCreateNestedManyWithoutRutasInput
  }

  export type rutasUpdateInput = {
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUpdateManyWithoutRutasNestedInput
    ubicacion_rutas_id_destinoToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_destinoToubicacionNestedInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_origenToubicacionNestedInput
    usuarios?: usuariosUpdateOneWithoutRutasNestedInput
  }

  export type rutasUncheckedUpdateInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_origen?: NullableIntFieldUpdateOperationsInput | number | null
    id_destino?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUncheckedUpdateManyWithoutRutasNestedInput
  }

  export type rutasCreateManyInput = {
    id_ruta?: number
    id_usuario?: number | null
    riesgo?: number | null
    id_origen?: number | null
    id_destino?: number | null
    favorito?: boolean | null
  }

  export type rutasUpdateManyMutationInput = {
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type rutasUncheckedUpdateManyInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_origen?: NullableIntFieldUpdateOperationsInput | number | null
    id_destino?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type spatial_ref_sysCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUncheckedCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysCreateManyInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateManyMutationInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateManyInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_eventoCreateInput = {
    nombre: string
    eventos?: eventosCreateNestedManyWithoutTipo_eventoInput
  }

  export type tipo_eventoUncheckedCreateInput = {
    id_tipo_evento?: number
    nombre: string
    eventos?: eventosUncheckedCreateNestedManyWithoutTipo_eventoInput
  }

  export type tipo_eventoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    eventos?: eventosUpdateManyWithoutTipo_eventoNestedInput
  }

  export type tipo_eventoUncheckedUpdateInput = {
    id_tipo_evento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    eventos?: eventosUncheckedUpdateManyWithoutTipo_eventoNestedInput
  }

  export type tipo_eventoCreateManyInput = {
    id_tipo_evento?: number
    nombre: string
  }

  export type tipo_eventoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_eventoUncheckedUpdateManyInput = {
    id_tipo_evento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ubicacionCreateInput = {
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_destinoToubicacion?: rutasCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput
    rutas_rutas_id_origenToubicacion?: rutasCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput
    usuarios?: usuariosCreateNestedOneWithoutUbicacionInput
  }

  export type ubicacionUncheckedCreateInput = {
    id_ubicacion?: number
    id_usuario?: number | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_destinoToubicacion?: rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput
    rutas_rutas_id_origenToubicacion?: rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput
  }

  export type ubicacionUpdateInput = {
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_destinoToubicacion?: rutasUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput
    rutas_rutas_id_origenToubicacion?: rutasUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput
    usuarios?: usuariosUpdateOneWithoutUbicacionNestedInput
  }

  export type ubicacionUncheckedUpdateInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_destinoToubicacion?: rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput
    rutas_rutas_id_origenToubicacion?: rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput
  }

  export type ubicacionCreateManyInput = {
    id_ubicacion?: number
    id_usuario?: number | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
  }

  export type ubicacionUpdateManyMutationInput = {
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ubicacionUncheckedUpdateManyInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionCreateNestedManyWithoutUsuariosInput
    eventos?: eventosCreateNestedManyWithoutUsuariosInput
    rutas?: rutasCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutUsuariosInput
    eventos?: eventosUncheckedCreateNestedManyWithoutUsuariosInput
    rutas?: rutasUncheckedCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUpdateManyWithoutUsuariosNestedInput
    eventos?: eventosUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUncheckedUpdateManyWithoutUsuariosNestedInput
    eventos?: eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUncheckedUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosCreateInput = {
    descripcion?: string | null
    fecha_registro?: Date | string | null
    tipo_evento?: tipo_eventoCreateNestedOneWithoutEventosInput
    usuarios?: usuariosCreateNestedOneWithoutEventosInput
  }

  export type eventosUncheckedCreateInput = {
    id_evento?: number
    id_tipo_evento?: number | null
    descripcion?: string | null
    id_usuario?: number | null
    fecha_registro?: Date | string | null
  }

  export type eventosUpdateInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_evento?: tipo_eventoUpdateOneWithoutEventosNestedInput
    usuarios?: usuariosUpdateOneWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_tipo_evento?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosCreateManyInput = {
    id_evento?: number
    id_tipo_evento?: number | null
    descripcion?: string | null
    id_usuario?: number | null
    fecha_registro?: Date | string | null
  }

  export type eventosUpdateManyMutationInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_tipo_evento?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type calificacionCountOrderByAggregateInput = {
    id_calificacion?: SortOrder
    id_usuario?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    id_evento?: SortOrder
    id_zona_segura?: SortOrder
    tipo_calificacion?: SortOrder
  }

  export type calificacionAvgOrderByAggregateInput = {
    id_calificacion?: SortOrder
    id_usuario?: SortOrder
    calificacion?: SortOrder
    id_evento?: SortOrder
    id_zona_segura?: SortOrder
  }

  export type calificacionMaxOrderByAggregateInput = {
    id_calificacion?: SortOrder
    id_usuario?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    id_evento?: SortOrder
    id_zona_segura?: SortOrder
    tipo_calificacion?: SortOrder
  }

  export type calificacionMinOrderByAggregateInput = {
    id_calificacion?: SortOrder
    id_usuario?: SortOrder
    calificacion?: SortOrder
    comentario?: SortOrder
    id_evento?: SortOrder
    id_zona_segura?: SortOrder
    tipo_calificacion?: SortOrder
  }

  export type calificacionSumOrderByAggregateInput = {
    id_calificacion?: SortOrder
    id_usuario?: SortOrder
    calificacion?: SortOrder
    id_evento?: SortOrder
    id_zona_segura?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RutasNullableScalarRelationFilter = {
    is?: rutasWhereInput | null
    isNot?: rutasWhereInput | null
  }

  export type detalle_rutaCountOrderByAggregateInput = {
    id_detalle_ruta?: SortOrder
    id_ruta?: SortOrder
    id_zona_segura?: SortOrder
    id_evento?: SortOrder
    fecha_registro?: SortOrder
  }

  export type detalle_rutaAvgOrderByAggregateInput = {
    id_detalle_ruta?: SortOrder
    id_ruta?: SortOrder
    id_zona_segura?: SortOrder
    id_evento?: SortOrder
  }

  export type detalle_rutaMaxOrderByAggregateInput = {
    id_detalle_ruta?: SortOrder
    id_ruta?: SortOrder
    id_zona_segura?: SortOrder
    id_evento?: SortOrder
    fecha_registro?: SortOrder
  }

  export type detalle_rutaMinOrderByAggregateInput = {
    id_detalle_ruta?: SortOrder
    id_ruta?: SortOrder
    id_zona_segura?: SortOrder
    id_evento?: SortOrder
    fecha_registro?: SortOrder
  }

  export type detalle_rutaSumOrderByAggregateInput = {
    id_detalle_ruta?: SortOrder
    id_ruta?: SortOrder
    id_zona_segura?: SortOrder
    id_evento?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Detalle_rutaListRelationFilter = {
    every?: detalle_rutaWhereInput
    some?: detalle_rutaWhereInput
    none?: detalle_rutaWhereInput
  }

  export type UbicacionNullableScalarRelationFilter = {
    is?: ubicacionWhereInput | null
    isNot?: ubicacionWhereInput | null
  }

  export type detalle_rutaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rutasCountOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_usuario?: SortOrder
    riesgo?: SortOrder
    id_origen?: SortOrder
    id_destino?: SortOrder
    favorito?: SortOrder
  }

  export type rutasAvgOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_usuario?: SortOrder
    riesgo?: SortOrder
    id_origen?: SortOrder
    id_destino?: SortOrder
  }

  export type rutasMaxOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_usuario?: SortOrder
    riesgo?: SortOrder
    id_origen?: SortOrder
    id_destino?: SortOrder
    favorito?: SortOrder
  }

  export type rutasMinOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_usuario?: SortOrder
    riesgo?: SortOrder
    id_origen?: SortOrder
    id_destino?: SortOrder
    favorito?: SortOrder
  }

  export type rutasSumOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_usuario?: SortOrder
    riesgo?: SortOrder
    id_origen?: SortOrder
    id_destino?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type spatial_ref_sysCountOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysAvgOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type spatial_ref_sysMaxOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysMinOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysSumOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EventosListRelationFilter = {
    every?: eventosWhereInput
    some?: eventosWhereInput
    none?: eventosWhereInput
  }

  export type eventosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipo_eventoCountOrderByAggregateInput = {
    id_tipo_evento?: SortOrder
    nombre?: SortOrder
  }

  export type tipo_eventoAvgOrderByAggregateInput = {
    id_tipo_evento?: SortOrder
  }

  export type tipo_eventoMaxOrderByAggregateInput = {
    id_tipo_evento?: SortOrder
    nombre?: SortOrder
  }

  export type tipo_eventoMinOrderByAggregateInput = {
    id_tipo_evento?: SortOrder
    nombre?: SortOrder
  }

  export type tipo_eventoSumOrderByAggregateInput = {
    id_tipo_evento?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RutasListRelationFilter = {
    every?: rutasWhereInput
    some?: rutasWhereInput
    none?: rutasWhereInput
  }

  export type rutasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ubicacionCountOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    nombre?: SortOrder
  }

  export type ubicacionAvgOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type ubicacionMaxOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    nombre?: SortOrder
  }

  export type ubicacionMinOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    nombre?: SortOrder
  }

  export type ubicacionSumOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CalificacionListRelationFilter = {
    every?: calificacionWhereInput
    some?: calificacionWhereInput
    none?: calificacionWhereInput
  }

  export type UbicacionListRelationFilter = {
    every?: ubicacionWhereInput
    some?: ubicacionWhereInput
    none?: ubicacionWhereInput
  }

  export type calificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ubicacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    correo?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    correo?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    correo?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type Tipo_eventoNullableScalarRelationFilter = {
    is?: tipo_eventoWhereInput | null
    isNot?: tipo_eventoWhereInput | null
  }

  export type eventosCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_tipo_evento?: SortOrder
    descripcion?: SortOrder
    id_usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type eventosAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_tipo_evento?: SortOrder
    id_usuario?: SortOrder
  }

  export type eventosMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_tipo_evento?: SortOrder
    descripcion?: SortOrder
    id_usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type eventosMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_tipo_evento?: SortOrder
    descripcion?: SortOrder
    id_usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type eventosSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_tipo_evento?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuariosCreateNestedOneWithoutCalificacionInput = {
    create?: XOR<usuariosCreateWithoutCalificacionInput, usuariosUncheckedCreateWithoutCalificacionInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCalificacionInput
    connect?: usuariosWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usuariosUpdateOneWithoutCalificacionNestedInput = {
    create?: XOR<usuariosCreateWithoutCalificacionInput, usuariosUncheckedCreateWithoutCalificacionInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCalificacionInput
    upsert?: usuariosUpsertWithoutCalificacionInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutCalificacionInput, usuariosUpdateWithoutCalificacionInput>, usuariosUncheckedUpdateWithoutCalificacionInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rutasCreateNestedOneWithoutDetalle_rutaInput = {
    create?: XOR<rutasCreateWithoutDetalle_rutaInput, rutasUncheckedCreateWithoutDetalle_rutaInput>
    connectOrCreate?: rutasCreateOrConnectWithoutDetalle_rutaInput
    connect?: rutasWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type rutasUpdateOneWithoutDetalle_rutaNestedInput = {
    create?: XOR<rutasCreateWithoutDetalle_rutaInput, rutasUncheckedCreateWithoutDetalle_rutaInput>
    connectOrCreate?: rutasCreateOrConnectWithoutDetalle_rutaInput
    upsert?: rutasUpsertWithoutDetalle_rutaInput
    disconnect?: rutasWhereInput | boolean
    delete?: rutasWhereInput | boolean
    connect?: rutasWhereUniqueInput
    update?: XOR<XOR<rutasUpdateToOneWithWhereWithoutDetalle_rutaInput, rutasUpdateWithoutDetalle_rutaInput>, rutasUncheckedUpdateWithoutDetalle_rutaInput>
  }

  export type detalle_rutaCreateNestedManyWithoutRutasInput = {
    create?: XOR<detalle_rutaCreateWithoutRutasInput, detalle_rutaUncheckedCreateWithoutRutasInput> | detalle_rutaCreateWithoutRutasInput[] | detalle_rutaUncheckedCreateWithoutRutasInput[]
    connectOrCreate?: detalle_rutaCreateOrConnectWithoutRutasInput | detalle_rutaCreateOrConnectWithoutRutasInput[]
    createMany?: detalle_rutaCreateManyRutasInputEnvelope
    connect?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
  }

  export type ubicacionCreateNestedOneWithoutRutas_rutas_id_destinoToubicacionInput = {
    create?: XOR<ubicacionCreateWithoutRutas_rutas_id_destinoToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_destinoToubicacionInput>
    connectOrCreate?: ubicacionCreateOrConnectWithoutRutas_rutas_id_destinoToubicacionInput
    connect?: ubicacionWhereUniqueInput
  }

  export type ubicacionCreateNestedOneWithoutRutas_rutas_id_origenToubicacionInput = {
    create?: XOR<ubicacionCreateWithoutRutas_rutas_id_origenToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_origenToubicacionInput>
    connectOrCreate?: ubicacionCreateOrConnectWithoutRutas_rutas_id_origenToubicacionInput
    connect?: ubicacionWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutRutasInput = {
    create?: XOR<usuariosCreateWithoutRutasInput, usuariosUncheckedCreateWithoutRutasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutRutasInput
    connect?: usuariosWhereUniqueInput
  }

  export type detalle_rutaUncheckedCreateNestedManyWithoutRutasInput = {
    create?: XOR<detalle_rutaCreateWithoutRutasInput, detalle_rutaUncheckedCreateWithoutRutasInput> | detalle_rutaCreateWithoutRutasInput[] | detalle_rutaUncheckedCreateWithoutRutasInput[]
    connectOrCreate?: detalle_rutaCreateOrConnectWithoutRutasInput | detalle_rutaCreateOrConnectWithoutRutasInput[]
    createMany?: detalle_rutaCreateManyRutasInputEnvelope
    connect?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type detalle_rutaUpdateManyWithoutRutasNestedInput = {
    create?: XOR<detalle_rutaCreateWithoutRutasInput, detalle_rutaUncheckedCreateWithoutRutasInput> | detalle_rutaCreateWithoutRutasInput[] | detalle_rutaUncheckedCreateWithoutRutasInput[]
    connectOrCreate?: detalle_rutaCreateOrConnectWithoutRutasInput | detalle_rutaCreateOrConnectWithoutRutasInput[]
    upsert?: detalle_rutaUpsertWithWhereUniqueWithoutRutasInput | detalle_rutaUpsertWithWhereUniqueWithoutRutasInput[]
    createMany?: detalle_rutaCreateManyRutasInputEnvelope
    set?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    disconnect?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    delete?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    connect?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    update?: detalle_rutaUpdateWithWhereUniqueWithoutRutasInput | detalle_rutaUpdateWithWhereUniqueWithoutRutasInput[]
    updateMany?: detalle_rutaUpdateManyWithWhereWithoutRutasInput | detalle_rutaUpdateManyWithWhereWithoutRutasInput[]
    deleteMany?: detalle_rutaScalarWhereInput | detalle_rutaScalarWhereInput[]
  }

  export type ubicacionUpdateOneWithoutRutas_rutas_id_destinoToubicacionNestedInput = {
    create?: XOR<ubicacionCreateWithoutRutas_rutas_id_destinoToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_destinoToubicacionInput>
    connectOrCreate?: ubicacionCreateOrConnectWithoutRutas_rutas_id_destinoToubicacionInput
    upsert?: ubicacionUpsertWithoutRutas_rutas_id_destinoToubicacionInput
    disconnect?: ubicacionWhereInput | boolean
    delete?: ubicacionWhereInput | boolean
    connect?: ubicacionWhereUniqueInput
    update?: XOR<XOR<ubicacionUpdateToOneWithWhereWithoutRutas_rutas_id_destinoToubicacionInput, ubicacionUpdateWithoutRutas_rutas_id_destinoToubicacionInput>, ubicacionUncheckedUpdateWithoutRutas_rutas_id_destinoToubicacionInput>
  }

  export type ubicacionUpdateOneWithoutRutas_rutas_id_origenToubicacionNestedInput = {
    create?: XOR<ubicacionCreateWithoutRutas_rutas_id_origenToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_origenToubicacionInput>
    connectOrCreate?: ubicacionCreateOrConnectWithoutRutas_rutas_id_origenToubicacionInput
    upsert?: ubicacionUpsertWithoutRutas_rutas_id_origenToubicacionInput
    disconnect?: ubicacionWhereInput | boolean
    delete?: ubicacionWhereInput | boolean
    connect?: ubicacionWhereUniqueInput
    update?: XOR<XOR<ubicacionUpdateToOneWithWhereWithoutRutas_rutas_id_origenToubicacionInput, ubicacionUpdateWithoutRutas_rutas_id_origenToubicacionInput>, ubicacionUncheckedUpdateWithoutRutas_rutas_id_origenToubicacionInput>
  }

  export type usuariosUpdateOneWithoutRutasNestedInput = {
    create?: XOR<usuariosCreateWithoutRutasInput, usuariosUncheckedCreateWithoutRutasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutRutasInput
    upsert?: usuariosUpsertWithoutRutasInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutRutasInput, usuariosUpdateWithoutRutasInput>, usuariosUncheckedUpdateWithoutRutasInput>
  }

  export type detalle_rutaUncheckedUpdateManyWithoutRutasNestedInput = {
    create?: XOR<detalle_rutaCreateWithoutRutasInput, detalle_rutaUncheckedCreateWithoutRutasInput> | detalle_rutaCreateWithoutRutasInput[] | detalle_rutaUncheckedCreateWithoutRutasInput[]
    connectOrCreate?: detalle_rutaCreateOrConnectWithoutRutasInput | detalle_rutaCreateOrConnectWithoutRutasInput[]
    upsert?: detalle_rutaUpsertWithWhereUniqueWithoutRutasInput | detalle_rutaUpsertWithWhereUniqueWithoutRutasInput[]
    createMany?: detalle_rutaCreateManyRutasInputEnvelope
    set?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    disconnect?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    delete?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    connect?: detalle_rutaWhereUniqueInput | detalle_rutaWhereUniqueInput[]
    update?: detalle_rutaUpdateWithWhereUniqueWithoutRutasInput | detalle_rutaUpdateWithWhereUniqueWithoutRutasInput[]
    updateMany?: detalle_rutaUpdateManyWithWhereWithoutRutasInput | detalle_rutaUpdateManyWithWhereWithoutRutasInput[]
    deleteMany?: detalle_rutaScalarWhereInput | detalle_rutaScalarWhereInput[]
  }

  export type eventosCreateNestedManyWithoutTipo_eventoInput = {
    create?: XOR<eventosCreateWithoutTipo_eventoInput, eventosUncheckedCreateWithoutTipo_eventoInput> | eventosCreateWithoutTipo_eventoInput[] | eventosUncheckedCreateWithoutTipo_eventoInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTipo_eventoInput | eventosCreateOrConnectWithoutTipo_eventoInput[]
    createMany?: eventosCreateManyTipo_eventoInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type eventosUncheckedCreateNestedManyWithoutTipo_eventoInput = {
    create?: XOR<eventosCreateWithoutTipo_eventoInput, eventosUncheckedCreateWithoutTipo_eventoInput> | eventosCreateWithoutTipo_eventoInput[] | eventosUncheckedCreateWithoutTipo_eventoInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTipo_eventoInput | eventosCreateOrConnectWithoutTipo_eventoInput[]
    createMany?: eventosCreateManyTipo_eventoInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type eventosUpdateManyWithoutTipo_eventoNestedInput = {
    create?: XOR<eventosCreateWithoutTipo_eventoInput, eventosUncheckedCreateWithoutTipo_eventoInput> | eventosCreateWithoutTipo_eventoInput[] | eventosUncheckedCreateWithoutTipo_eventoInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTipo_eventoInput | eventosCreateOrConnectWithoutTipo_eventoInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutTipo_eventoInput | eventosUpsertWithWhereUniqueWithoutTipo_eventoInput[]
    createMany?: eventosCreateManyTipo_eventoInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutTipo_eventoInput | eventosUpdateWithWhereUniqueWithoutTipo_eventoInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutTipo_eventoInput | eventosUpdateManyWithWhereWithoutTipo_eventoInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type eventosUncheckedUpdateManyWithoutTipo_eventoNestedInput = {
    create?: XOR<eventosCreateWithoutTipo_eventoInput, eventosUncheckedCreateWithoutTipo_eventoInput> | eventosCreateWithoutTipo_eventoInput[] | eventosUncheckedCreateWithoutTipo_eventoInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTipo_eventoInput | eventosCreateOrConnectWithoutTipo_eventoInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutTipo_eventoInput | eventosUpsertWithWhereUniqueWithoutTipo_eventoInput[]
    createMany?: eventosCreateManyTipo_eventoInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutTipo_eventoInput | eventosUpdateWithWhereUniqueWithoutTipo_eventoInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutTipo_eventoInput | eventosUpdateManyWithWhereWithoutTipo_eventoInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type rutasCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_destinoToubicacionInputEnvelope
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
  }

  export type rutasCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_origenToubicacionInputEnvelope
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutUbicacionInput = {
    create?: XOR<usuariosCreateWithoutUbicacionInput, usuariosUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUbicacionInput
    connect?: usuariosWhereUniqueInput
  }

  export type rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_destinoToubicacionInputEnvelope
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
  }

  export type rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_origenToubicacionInputEnvelope
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type rutasUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    upsert?: rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_destinoToubicacionInputEnvelope
    set?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    disconnect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    delete?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    update?: rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    updateMany?: rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    deleteMany?: rutasScalarWhereInput | rutasScalarWhereInput[]
  }

  export type rutasUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput[]
    upsert?: rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput | rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_origenToubicacionInputEnvelope
    set?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    disconnect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    delete?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    update?: rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput | rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput[]
    updateMany?: rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_origenToubicacionInput | rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_origenToubicacionInput[]
    deleteMany?: rutasScalarWhereInput | rutasScalarWhereInput[]
  }

  export type usuariosUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<usuariosCreateWithoutUbicacionInput, usuariosUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutUbicacionInput
    upsert?: usuariosUpsertWithoutUbicacionInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutUbicacionInput, usuariosUpdateWithoutUbicacionInput>, usuariosUncheckedUpdateWithoutUbicacionInput>
  }

  export type rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    upsert?: rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_destinoToubicacionInputEnvelope
    set?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    disconnect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    delete?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    update?: rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    updateMany?: rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_destinoToubicacionInput | rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_destinoToubicacionInput[]
    deleteMany?: rutasScalarWhereInput | rutasScalarWhereInput[]
  }

  export type rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput = {
    create?: XOR<rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput> | rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput[] | rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput | rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput[]
    upsert?: rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput | rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput[]
    createMany?: rutasCreateManyUbicacion_rutas_id_origenToubicacionInputEnvelope
    set?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    disconnect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    delete?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    update?: rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput | rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput[]
    updateMany?: rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_origenToubicacionInput | rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_origenToubicacionInput[]
    deleteMany?: rutasScalarWhereInput | rutasScalarWhereInput[]
  }

  export type calificacionCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<calificacionCreateWithoutUsuariosInput, calificacionUncheckedCreateWithoutUsuariosInput> | calificacionCreateWithoutUsuariosInput[] | calificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuariosInput | calificacionCreateOrConnectWithoutUsuariosInput[]
    createMany?: calificacionCreateManyUsuariosInputEnvelope
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
  }

  export type eventosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<eventosCreateWithoutUsuariosInput, eventosUncheckedCreateWithoutUsuariosInput> | eventosCreateWithoutUsuariosInput[] | eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutUsuariosInput | eventosCreateOrConnectWithoutUsuariosInput[]
    createMany?: eventosCreateManyUsuariosInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type rutasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<rutasCreateWithoutUsuariosInput, rutasUncheckedCreateWithoutUsuariosInput> | rutasCreateWithoutUsuariosInput[] | rutasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUsuariosInput | rutasCreateOrConnectWithoutUsuariosInput[]
    createMany?: rutasCreateManyUsuariosInputEnvelope
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
  }

  export type ubicacionCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ubicacionCreateWithoutUsuariosInput, ubicacionUncheckedCreateWithoutUsuariosInput> | ubicacionCreateWithoutUsuariosInput[] | ubicacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ubicacionCreateOrConnectWithoutUsuariosInput | ubicacionCreateOrConnectWithoutUsuariosInput[]
    createMany?: ubicacionCreateManyUsuariosInputEnvelope
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
  }

  export type calificacionUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<calificacionCreateWithoutUsuariosInput, calificacionUncheckedCreateWithoutUsuariosInput> | calificacionCreateWithoutUsuariosInput[] | calificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuariosInput | calificacionCreateOrConnectWithoutUsuariosInput[]
    createMany?: calificacionCreateManyUsuariosInputEnvelope
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
  }

  export type eventosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<eventosCreateWithoutUsuariosInput, eventosUncheckedCreateWithoutUsuariosInput> | eventosCreateWithoutUsuariosInput[] | eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutUsuariosInput | eventosCreateOrConnectWithoutUsuariosInput[]
    createMany?: eventosCreateManyUsuariosInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type rutasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<rutasCreateWithoutUsuariosInput, rutasUncheckedCreateWithoutUsuariosInput> | rutasCreateWithoutUsuariosInput[] | rutasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUsuariosInput | rutasCreateOrConnectWithoutUsuariosInput[]
    createMany?: rutasCreateManyUsuariosInputEnvelope
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
  }

  export type ubicacionUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ubicacionCreateWithoutUsuariosInput, ubicacionUncheckedCreateWithoutUsuariosInput> | ubicacionCreateWithoutUsuariosInput[] | ubicacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ubicacionCreateOrConnectWithoutUsuariosInput | ubicacionCreateOrConnectWithoutUsuariosInput[]
    createMany?: ubicacionCreateManyUsuariosInputEnvelope
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
  }

  export type calificacionUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<calificacionCreateWithoutUsuariosInput, calificacionUncheckedCreateWithoutUsuariosInput> | calificacionCreateWithoutUsuariosInput[] | calificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuariosInput | calificacionCreateOrConnectWithoutUsuariosInput[]
    upsert?: calificacionUpsertWithWhereUniqueWithoutUsuariosInput | calificacionUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: calificacionCreateManyUsuariosInputEnvelope
    set?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    disconnect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    delete?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    update?: calificacionUpdateWithWhereUniqueWithoutUsuariosInput | calificacionUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: calificacionUpdateManyWithWhereWithoutUsuariosInput | calificacionUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
  }

  export type eventosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<eventosCreateWithoutUsuariosInput, eventosUncheckedCreateWithoutUsuariosInput> | eventosCreateWithoutUsuariosInput[] | eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutUsuariosInput | eventosCreateOrConnectWithoutUsuariosInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutUsuariosInput | eventosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: eventosCreateManyUsuariosInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutUsuariosInput | eventosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutUsuariosInput | eventosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type rutasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<rutasCreateWithoutUsuariosInput, rutasUncheckedCreateWithoutUsuariosInput> | rutasCreateWithoutUsuariosInput[] | rutasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUsuariosInput | rutasCreateOrConnectWithoutUsuariosInput[]
    upsert?: rutasUpsertWithWhereUniqueWithoutUsuariosInput | rutasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: rutasCreateManyUsuariosInputEnvelope
    set?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    disconnect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    delete?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    update?: rutasUpdateWithWhereUniqueWithoutUsuariosInput | rutasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: rutasUpdateManyWithWhereWithoutUsuariosInput | rutasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: rutasScalarWhereInput | rutasScalarWhereInput[]
  }

  export type ubicacionUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ubicacionCreateWithoutUsuariosInput, ubicacionUncheckedCreateWithoutUsuariosInput> | ubicacionCreateWithoutUsuariosInput[] | ubicacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ubicacionCreateOrConnectWithoutUsuariosInput | ubicacionCreateOrConnectWithoutUsuariosInput[]
    upsert?: ubicacionUpsertWithWhereUniqueWithoutUsuariosInput | ubicacionUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ubicacionCreateManyUsuariosInputEnvelope
    set?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    disconnect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    delete?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    update?: ubicacionUpdateWithWhereUniqueWithoutUsuariosInput | ubicacionUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ubicacionUpdateManyWithWhereWithoutUsuariosInput | ubicacionUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
  }

  export type calificacionUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<calificacionCreateWithoutUsuariosInput, calificacionUncheckedCreateWithoutUsuariosInput> | calificacionCreateWithoutUsuariosInput[] | calificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuariosInput | calificacionCreateOrConnectWithoutUsuariosInput[]
    upsert?: calificacionUpsertWithWhereUniqueWithoutUsuariosInput | calificacionUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: calificacionCreateManyUsuariosInputEnvelope
    set?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    disconnect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    delete?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    update?: calificacionUpdateWithWhereUniqueWithoutUsuariosInput | calificacionUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: calificacionUpdateManyWithWhereWithoutUsuariosInput | calificacionUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
  }

  export type eventosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<eventosCreateWithoutUsuariosInput, eventosUncheckedCreateWithoutUsuariosInput> | eventosCreateWithoutUsuariosInput[] | eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutUsuariosInput | eventosCreateOrConnectWithoutUsuariosInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutUsuariosInput | eventosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: eventosCreateManyUsuariosInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutUsuariosInput | eventosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutUsuariosInput | eventosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type rutasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<rutasCreateWithoutUsuariosInput, rutasUncheckedCreateWithoutUsuariosInput> | rutasCreateWithoutUsuariosInput[] | rutasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rutasCreateOrConnectWithoutUsuariosInput | rutasCreateOrConnectWithoutUsuariosInput[]
    upsert?: rutasUpsertWithWhereUniqueWithoutUsuariosInput | rutasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: rutasCreateManyUsuariosInputEnvelope
    set?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    disconnect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    delete?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    connect?: rutasWhereUniqueInput | rutasWhereUniqueInput[]
    update?: rutasUpdateWithWhereUniqueWithoutUsuariosInput | rutasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: rutasUpdateManyWithWhereWithoutUsuariosInput | rutasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: rutasScalarWhereInput | rutasScalarWhereInput[]
  }

  export type ubicacionUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ubicacionCreateWithoutUsuariosInput, ubicacionUncheckedCreateWithoutUsuariosInput> | ubicacionCreateWithoutUsuariosInput[] | ubicacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ubicacionCreateOrConnectWithoutUsuariosInput | ubicacionCreateOrConnectWithoutUsuariosInput[]
    upsert?: ubicacionUpsertWithWhereUniqueWithoutUsuariosInput | ubicacionUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ubicacionCreateManyUsuariosInputEnvelope
    set?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    disconnect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    delete?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    update?: ubicacionUpdateWithWhereUniqueWithoutUsuariosInput | ubicacionUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ubicacionUpdateManyWithWhereWithoutUsuariosInput | ubicacionUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
  }

  export type tipo_eventoCreateNestedOneWithoutEventosInput = {
    create?: XOR<tipo_eventoCreateWithoutEventosInput, tipo_eventoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: tipo_eventoCreateOrConnectWithoutEventosInput
    connect?: tipo_eventoWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutEventosInput = {
    create?: XOR<usuariosCreateWithoutEventosInput, usuariosUncheckedCreateWithoutEventosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutEventosInput
    connect?: usuariosWhereUniqueInput
  }

  export type tipo_eventoUpdateOneWithoutEventosNestedInput = {
    create?: XOR<tipo_eventoCreateWithoutEventosInput, tipo_eventoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: tipo_eventoCreateOrConnectWithoutEventosInput
    upsert?: tipo_eventoUpsertWithoutEventosInput
    disconnect?: tipo_eventoWhereInput | boolean
    delete?: tipo_eventoWhereInput | boolean
    connect?: tipo_eventoWhereUniqueInput
    update?: XOR<XOR<tipo_eventoUpdateToOneWithWhereWithoutEventosInput, tipo_eventoUpdateWithoutEventosInput>, tipo_eventoUncheckedUpdateWithoutEventosInput>
  }

  export type usuariosUpdateOneWithoutEventosNestedInput = {
    create?: XOR<usuariosCreateWithoutEventosInput, usuariosUncheckedCreateWithoutEventosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutEventosInput
    upsert?: usuariosUpsertWithoutEventosInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutEventosInput, usuariosUpdateWithoutEventosInput>, usuariosUncheckedUpdateWithoutEventosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutCalificacionInput = {
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    eventos?: eventosCreateNestedManyWithoutUsuariosInput
    rutas?: rutasCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutCalificacionInput = {
    id_usuario?: number
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    eventos?: eventosUncheckedCreateNestedManyWithoutUsuariosInput
    rutas?: rutasUncheckedCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutCalificacionInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutCalificacionInput, usuariosUncheckedCreateWithoutCalificacionInput>
  }

  export type usuariosUpsertWithoutCalificacionInput = {
    update: XOR<usuariosUpdateWithoutCalificacionInput, usuariosUncheckedUpdateWithoutCalificacionInput>
    create: XOR<usuariosCreateWithoutCalificacionInput, usuariosUncheckedCreateWithoutCalificacionInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutCalificacionInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutCalificacionInput, usuariosUncheckedUpdateWithoutCalificacionInput>
  }

  export type usuariosUpdateWithoutCalificacionInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutCalificacionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUncheckedUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type rutasCreateWithoutDetalle_rutaInput = {
    riesgo?: number | null
    favorito?: boolean | null
    ubicacion_rutas_id_destinoToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_destinoToubicacionInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_origenToubicacionInput
    usuarios?: usuariosCreateNestedOneWithoutRutasInput
  }

  export type rutasUncheckedCreateWithoutDetalle_rutaInput = {
    id_ruta?: number
    id_usuario?: number | null
    riesgo?: number | null
    id_origen?: number | null
    id_destino?: number | null
    favorito?: boolean | null
  }

  export type rutasCreateOrConnectWithoutDetalle_rutaInput = {
    where: rutasWhereUniqueInput
    create: XOR<rutasCreateWithoutDetalle_rutaInput, rutasUncheckedCreateWithoutDetalle_rutaInput>
  }

  export type rutasUpsertWithoutDetalle_rutaInput = {
    update: XOR<rutasUpdateWithoutDetalle_rutaInput, rutasUncheckedUpdateWithoutDetalle_rutaInput>
    create: XOR<rutasCreateWithoutDetalle_rutaInput, rutasUncheckedCreateWithoutDetalle_rutaInput>
    where?: rutasWhereInput
  }

  export type rutasUpdateToOneWithWhereWithoutDetalle_rutaInput = {
    where?: rutasWhereInput
    data: XOR<rutasUpdateWithoutDetalle_rutaInput, rutasUncheckedUpdateWithoutDetalle_rutaInput>
  }

  export type rutasUpdateWithoutDetalle_rutaInput = {
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ubicacion_rutas_id_destinoToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_destinoToubicacionNestedInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_origenToubicacionNestedInput
    usuarios?: usuariosUpdateOneWithoutRutasNestedInput
  }

  export type rutasUncheckedUpdateWithoutDetalle_rutaInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_origen?: NullableIntFieldUpdateOperationsInput | number | null
    id_destino?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type detalle_rutaCreateWithoutRutasInput = {
    id_zona_segura?: number | null
    id_evento?: number | null
    fecha_registro?: Date | string | null
  }

  export type detalle_rutaUncheckedCreateWithoutRutasInput = {
    id_detalle_ruta?: number
    id_zona_segura?: number | null
    id_evento?: number | null
    fecha_registro?: Date | string | null
  }

  export type detalle_rutaCreateOrConnectWithoutRutasInput = {
    where: detalle_rutaWhereUniqueInput
    create: XOR<detalle_rutaCreateWithoutRutasInput, detalle_rutaUncheckedCreateWithoutRutasInput>
  }

  export type detalle_rutaCreateManyRutasInputEnvelope = {
    data: detalle_rutaCreateManyRutasInput | detalle_rutaCreateManyRutasInput[]
    skipDuplicates?: boolean
  }

  export type ubicacionCreateWithoutRutas_rutas_id_destinoToubicacionInput = {
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_origenToubicacion?: rutasCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput
    usuarios?: usuariosCreateNestedOneWithoutUbicacionInput
  }

  export type ubicacionUncheckedCreateWithoutRutas_rutas_id_destinoToubicacionInput = {
    id_ubicacion?: number
    id_usuario?: number | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_origenToubicacion?: rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput
  }

  export type ubicacionCreateOrConnectWithoutRutas_rutas_id_destinoToubicacionInput = {
    where: ubicacionWhereUniqueInput
    create: XOR<ubicacionCreateWithoutRutas_rutas_id_destinoToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_destinoToubicacionInput>
  }

  export type ubicacionCreateWithoutRutas_rutas_id_origenToubicacionInput = {
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_destinoToubicacion?: rutasCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput
    usuarios?: usuariosCreateNestedOneWithoutUbicacionInput
  }

  export type ubicacionUncheckedCreateWithoutRutas_rutas_id_origenToubicacionInput = {
    id_ubicacion?: number
    id_usuario?: number | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_destinoToubicacion?: rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput
  }

  export type ubicacionCreateOrConnectWithoutRutas_rutas_id_origenToubicacionInput = {
    where: ubicacionWhereUniqueInput
    create: XOR<ubicacionCreateWithoutRutas_rutas_id_origenToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_origenToubicacionInput>
  }

  export type usuariosCreateWithoutRutasInput = {
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionCreateNestedManyWithoutUsuariosInput
    eventos?: eventosCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutRutasInput = {
    id_usuario?: number
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutUsuariosInput
    eventos?: eventosUncheckedCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutRutasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutRutasInput, usuariosUncheckedCreateWithoutRutasInput>
  }

  export type detalle_rutaUpsertWithWhereUniqueWithoutRutasInput = {
    where: detalle_rutaWhereUniqueInput
    update: XOR<detalle_rutaUpdateWithoutRutasInput, detalle_rutaUncheckedUpdateWithoutRutasInput>
    create: XOR<detalle_rutaCreateWithoutRutasInput, detalle_rutaUncheckedCreateWithoutRutasInput>
  }

  export type detalle_rutaUpdateWithWhereUniqueWithoutRutasInput = {
    where: detalle_rutaWhereUniqueInput
    data: XOR<detalle_rutaUpdateWithoutRutasInput, detalle_rutaUncheckedUpdateWithoutRutasInput>
  }

  export type detalle_rutaUpdateManyWithWhereWithoutRutasInput = {
    where: detalle_rutaScalarWhereInput
    data: XOR<detalle_rutaUpdateManyMutationInput, detalle_rutaUncheckedUpdateManyWithoutRutasInput>
  }

  export type detalle_rutaScalarWhereInput = {
    AND?: detalle_rutaScalarWhereInput | detalle_rutaScalarWhereInput[]
    OR?: detalle_rutaScalarWhereInput[]
    NOT?: detalle_rutaScalarWhereInput | detalle_rutaScalarWhereInput[]
    id_detalle_ruta?: IntFilter<"detalle_ruta"> | number
    id_ruta?: IntNullableFilter<"detalle_ruta"> | number | null
    id_zona_segura?: IntNullableFilter<"detalle_ruta"> | number | null
    id_evento?: IntNullableFilter<"detalle_ruta"> | number | null
    fecha_registro?: DateTimeNullableFilter<"detalle_ruta"> | Date | string | null
  }

  export type ubicacionUpsertWithoutRutas_rutas_id_destinoToubicacionInput = {
    update: XOR<ubicacionUpdateWithoutRutas_rutas_id_destinoToubicacionInput, ubicacionUncheckedUpdateWithoutRutas_rutas_id_destinoToubicacionInput>
    create: XOR<ubicacionCreateWithoutRutas_rutas_id_destinoToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_destinoToubicacionInput>
    where?: ubicacionWhereInput
  }

  export type ubicacionUpdateToOneWithWhereWithoutRutas_rutas_id_destinoToubicacionInput = {
    where?: ubicacionWhereInput
    data: XOR<ubicacionUpdateWithoutRutas_rutas_id_destinoToubicacionInput, ubicacionUncheckedUpdateWithoutRutas_rutas_id_destinoToubicacionInput>
  }

  export type ubicacionUpdateWithoutRutas_rutas_id_destinoToubicacionInput = {
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_origenToubicacion?: rutasUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput
    usuarios?: usuariosUpdateOneWithoutUbicacionNestedInput
  }

  export type ubicacionUncheckedUpdateWithoutRutas_rutas_id_destinoToubicacionInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_origenToubicacion?: rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput
  }

  export type ubicacionUpsertWithoutRutas_rutas_id_origenToubicacionInput = {
    update: XOR<ubicacionUpdateWithoutRutas_rutas_id_origenToubicacionInput, ubicacionUncheckedUpdateWithoutRutas_rutas_id_origenToubicacionInput>
    create: XOR<ubicacionCreateWithoutRutas_rutas_id_origenToubicacionInput, ubicacionUncheckedCreateWithoutRutas_rutas_id_origenToubicacionInput>
    where?: ubicacionWhereInput
  }

  export type ubicacionUpdateToOneWithWhereWithoutRutas_rutas_id_origenToubicacionInput = {
    where?: ubicacionWhereInput
    data: XOR<ubicacionUpdateWithoutRutas_rutas_id_origenToubicacionInput, ubicacionUncheckedUpdateWithoutRutas_rutas_id_origenToubicacionInput>
  }

  export type ubicacionUpdateWithoutRutas_rutas_id_origenToubicacionInput = {
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_destinoToubicacion?: rutasUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput
    usuarios?: usuariosUpdateOneWithoutUbicacionNestedInput
  }

  export type ubicacionUncheckedUpdateWithoutRutas_rutas_id_origenToubicacionInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_destinoToubicacion?: rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput
  }

  export type usuariosUpsertWithoutRutasInput = {
    update: XOR<usuariosUpdateWithoutRutasInput, usuariosUncheckedUpdateWithoutRutasInput>
    create: XOR<usuariosCreateWithoutRutasInput, usuariosUncheckedCreateWithoutRutasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutRutasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutRutasInput, usuariosUncheckedUpdateWithoutRutasInput>
  }

  export type usuariosUpdateWithoutRutasInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUpdateManyWithoutUsuariosNestedInput
    eventos?: eventosUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutRutasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUncheckedUpdateManyWithoutUsuariosNestedInput
    eventos?: eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type eventosCreateWithoutTipo_eventoInput = {
    descripcion?: string | null
    fecha_registro?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutEventosInput
  }

  export type eventosUncheckedCreateWithoutTipo_eventoInput = {
    id_evento?: number
    descripcion?: string | null
    id_usuario?: number | null
    fecha_registro?: Date | string | null
  }

  export type eventosCreateOrConnectWithoutTipo_eventoInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutTipo_eventoInput, eventosUncheckedCreateWithoutTipo_eventoInput>
  }

  export type eventosCreateManyTipo_eventoInputEnvelope = {
    data: eventosCreateManyTipo_eventoInput | eventosCreateManyTipo_eventoInput[]
    skipDuplicates?: boolean
  }

  export type eventosUpsertWithWhereUniqueWithoutTipo_eventoInput = {
    where: eventosWhereUniqueInput
    update: XOR<eventosUpdateWithoutTipo_eventoInput, eventosUncheckedUpdateWithoutTipo_eventoInput>
    create: XOR<eventosCreateWithoutTipo_eventoInput, eventosUncheckedCreateWithoutTipo_eventoInput>
  }

  export type eventosUpdateWithWhereUniqueWithoutTipo_eventoInput = {
    where: eventosWhereUniqueInput
    data: XOR<eventosUpdateWithoutTipo_eventoInput, eventosUncheckedUpdateWithoutTipo_eventoInput>
  }

  export type eventosUpdateManyWithWhereWithoutTipo_eventoInput = {
    where: eventosScalarWhereInput
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyWithoutTipo_eventoInput>
  }

  export type eventosScalarWhereInput = {
    AND?: eventosScalarWhereInput | eventosScalarWhereInput[]
    OR?: eventosScalarWhereInput[]
    NOT?: eventosScalarWhereInput | eventosScalarWhereInput[]
    id_evento?: IntFilter<"eventos"> | number
    id_tipo_evento?: IntNullableFilter<"eventos"> | number | null
    descripcion?: StringNullableFilter<"eventos"> | string | null
    id_usuario?: IntNullableFilter<"eventos"> | number | null
    fecha_registro?: DateTimeNullableFilter<"eventos"> | Date | string | null
  }

  export type rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    riesgo?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaCreateNestedManyWithoutRutasInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_origenToubicacionInput
    usuarios?: usuariosCreateNestedOneWithoutRutasInput
  }

  export type rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    id_ruta?: number
    id_usuario?: number | null
    riesgo?: number | null
    id_origen?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaUncheckedCreateNestedManyWithoutRutasInput
  }

  export type rutasCreateOrConnectWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    where: rutasWhereUniqueInput
    create: XOR<rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput>
  }

  export type rutasCreateManyUbicacion_rutas_id_destinoToubicacionInputEnvelope = {
    data: rutasCreateManyUbicacion_rutas_id_destinoToubicacionInput | rutasCreateManyUbicacion_rutas_id_destinoToubicacionInput[]
    skipDuplicates?: boolean
  }

  export type rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput = {
    riesgo?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaCreateNestedManyWithoutRutasInput
    ubicacion_rutas_id_destinoToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_destinoToubicacionInput
    usuarios?: usuariosCreateNestedOneWithoutRutasInput
  }

  export type rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput = {
    id_ruta?: number
    id_usuario?: number | null
    riesgo?: number | null
    id_destino?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaUncheckedCreateNestedManyWithoutRutasInput
  }

  export type rutasCreateOrConnectWithoutUbicacion_rutas_id_origenToubicacionInput = {
    where: rutasWhereUniqueInput
    create: XOR<rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput>
  }

  export type rutasCreateManyUbicacion_rutas_id_origenToubicacionInputEnvelope = {
    data: rutasCreateManyUbicacion_rutas_id_origenToubicacionInput | rutasCreateManyUbicacion_rutas_id_origenToubicacionInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutUbicacionInput = {
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionCreateNestedManyWithoutUsuariosInput
    eventos?: eventosCreateNestedManyWithoutUsuariosInput
    rutas?: rutasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutUbicacionInput = {
    id_usuario?: number
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutUsuariosInput
    eventos?: eventosUncheckedCreateNestedManyWithoutUsuariosInput
    rutas?: rutasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutUbicacionInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutUbicacionInput, usuariosUncheckedCreateWithoutUbicacionInput>
  }

  export type rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    where: rutasWhereUniqueInput
    update: XOR<rutasUpdateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedUpdateWithoutUbicacion_rutas_id_destinoToubicacionInput>
    create: XOR<rutasCreateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_destinoToubicacionInput>
  }

  export type rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    where: rutasWhereUniqueInput
    data: XOR<rutasUpdateWithoutUbicacion_rutas_id_destinoToubicacionInput, rutasUncheckedUpdateWithoutUbicacion_rutas_id_destinoToubicacionInput>
  }

  export type rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    where: rutasScalarWhereInput
    data: XOR<rutasUpdateManyMutationInput, rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionInput>
  }

  export type rutasScalarWhereInput = {
    AND?: rutasScalarWhereInput | rutasScalarWhereInput[]
    OR?: rutasScalarWhereInput[]
    NOT?: rutasScalarWhereInput | rutasScalarWhereInput[]
    id_ruta?: IntFilter<"rutas"> | number
    id_usuario?: IntNullableFilter<"rutas"> | number | null
    riesgo?: IntNullableFilter<"rutas"> | number | null
    id_origen?: IntNullableFilter<"rutas"> | number | null
    id_destino?: IntNullableFilter<"rutas"> | number | null
    favorito?: BoolNullableFilter<"rutas"> | boolean | null
  }

  export type rutasUpsertWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput = {
    where: rutasWhereUniqueInput
    update: XOR<rutasUpdateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedUpdateWithoutUbicacion_rutas_id_origenToubicacionInput>
    create: XOR<rutasCreateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedCreateWithoutUbicacion_rutas_id_origenToubicacionInput>
  }

  export type rutasUpdateWithWhereUniqueWithoutUbicacion_rutas_id_origenToubicacionInput = {
    where: rutasWhereUniqueInput
    data: XOR<rutasUpdateWithoutUbicacion_rutas_id_origenToubicacionInput, rutasUncheckedUpdateWithoutUbicacion_rutas_id_origenToubicacionInput>
  }

  export type rutasUpdateManyWithWhereWithoutUbicacion_rutas_id_origenToubicacionInput = {
    where: rutasScalarWhereInput
    data: XOR<rutasUpdateManyMutationInput, rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_origenToubicacionInput>
  }

  export type usuariosUpsertWithoutUbicacionInput = {
    update: XOR<usuariosUpdateWithoutUbicacionInput, usuariosUncheckedUpdateWithoutUbicacionInput>
    create: XOR<usuariosCreateWithoutUbicacionInput, usuariosUncheckedCreateWithoutUbicacionInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutUbicacionInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutUbicacionInput, usuariosUncheckedUpdateWithoutUbicacionInput>
  }

  export type usuariosUpdateWithoutUbicacionInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUpdateManyWithoutUsuariosNestedInput
    eventos?: eventosUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutUbicacionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUncheckedUpdateManyWithoutUsuariosNestedInput
    eventos?: eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type calificacionCreateWithoutUsuariosInput = {
    calificacion?: number | null
    comentario?: string | null
    id_evento?: number | null
    id_zona_segura?: number | null
    tipo_calificacion?: string | null
  }

  export type calificacionUncheckedCreateWithoutUsuariosInput = {
    id_calificacion?: number
    calificacion?: number | null
    comentario?: string | null
    id_evento?: number | null
    id_zona_segura?: number | null
    tipo_calificacion?: string | null
  }

  export type calificacionCreateOrConnectWithoutUsuariosInput = {
    where: calificacionWhereUniqueInput
    create: XOR<calificacionCreateWithoutUsuariosInput, calificacionUncheckedCreateWithoutUsuariosInput>
  }

  export type calificacionCreateManyUsuariosInputEnvelope = {
    data: calificacionCreateManyUsuariosInput | calificacionCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type eventosCreateWithoutUsuariosInput = {
    descripcion?: string | null
    fecha_registro?: Date | string | null
    tipo_evento?: tipo_eventoCreateNestedOneWithoutEventosInput
  }

  export type eventosUncheckedCreateWithoutUsuariosInput = {
    id_evento?: number
    id_tipo_evento?: number | null
    descripcion?: string | null
    fecha_registro?: Date | string | null
  }

  export type eventosCreateOrConnectWithoutUsuariosInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutUsuariosInput, eventosUncheckedCreateWithoutUsuariosInput>
  }

  export type eventosCreateManyUsuariosInputEnvelope = {
    data: eventosCreateManyUsuariosInput | eventosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type rutasCreateWithoutUsuariosInput = {
    riesgo?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaCreateNestedManyWithoutRutasInput
    ubicacion_rutas_id_destinoToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_destinoToubicacionInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionCreateNestedOneWithoutRutas_rutas_id_origenToubicacionInput
  }

  export type rutasUncheckedCreateWithoutUsuariosInput = {
    id_ruta?: number
    riesgo?: number | null
    id_origen?: number | null
    id_destino?: number | null
    favorito?: boolean | null
    detalle_ruta?: detalle_rutaUncheckedCreateNestedManyWithoutRutasInput
  }

  export type rutasCreateOrConnectWithoutUsuariosInput = {
    where: rutasWhereUniqueInput
    create: XOR<rutasCreateWithoutUsuariosInput, rutasUncheckedCreateWithoutUsuariosInput>
  }

  export type rutasCreateManyUsuariosInputEnvelope = {
    data: rutasCreateManyUsuariosInput | rutasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type ubicacionCreateWithoutUsuariosInput = {
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_destinoToubicacion?: rutasCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput
    rutas_rutas_id_origenToubicacion?: rutasCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput
  }

  export type ubicacionUncheckedCreateWithoutUsuariosInput = {
    id_ubicacion?: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
    rutas_rutas_id_destinoToubicacion?: rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_destinoToubicacionInput
    rutas_rutas_id_origenToubicacion?: rutasUncheckedCreateNestedManyWithoutUbicacion_rutas_id_origenToubicacionInput
  }

  export type ubicacionCreateOrConnectWithoutUsuariosInput = {
    where: ubicacionWhereUniqueInput
    create: XOR<ubicacionCreateWithoutUsuariosInput, ubicacionUncheckedCreateWithoutUsuariosInput>
  }

  export type ubicacionCreateManyUsuariosInputEnvelope = {
    data: ubicacionCreateManyUsuariosInput | ubicacionCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type calificacionUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: calificacionWhereUniqueInput
    update: XOR<calificacionUpdateWithoutUsuariosInput, calificacionUncheckedUpdateWithoutUsuariosInput>
    create: XOR<calificacionCreateWithoutUsuariosInput, calificacionUncheckedCreateWithoutUsuariosInput>
  }

  export type calificacionUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: calificacionWhereUniqueInput
    data: XOR<calificacionUpdateWithoutUsuariosInput, calificacionUncheckedUpdateWithoutUsuariosInput>
  }

  export type calificacionUpdateManyWithWhereWithoutUsuariosInput = {
    where: calificacionScalarWhereInput
    data: XOR<calificacionUpdateManyMutationInput, calificacionUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type calificacionScalarWhereInput = {
    AND?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
    OR?: calificacionScalarWhereInput[]
    NOT?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
    id_calificacion?: IntFilter<"calificacion"> | number
    id_usuario?: IntNullableFilter<"calificacion"> | number | null
    calificacion?: IntNullableFilter<"calificacion"> | number | null
    comentario?: StringNullableFilter<"calificacion"> | string | null
    id_evento?: IntNullableFilter<"calificacion"> | number | null
    id_zona_segura?: IntNullableFilter<"calificacion"> | number | null
    tipo_calificacion?: StringNullableFilter<"calificacion"> | string | null
  }

  export type eventosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: eventosWhereUniqueInput
    update: XOR<eventosUpdateWithoutUsuariosInput, eventosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<eventosCreateWithoutUsuariosInput, eventosUncheckedCreateWithoutUsuariosInput>
  }

  export type eventosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: eventosWhereUniqueInput
    data: XOR<eventosUpdateWithoutUsuariosInput, eventosUncheckedUpdateWithoutUsuariosInput>
  }

  export type eventosUpdateManyWithWhereWithoutUsuariosInput = {
    where: eventosScalarWhereInput
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type rutasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: rutasWhereUniqueInput
    update: XOR<rutasUpdateWithoutUsuariosInput, rutasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<rutasCreateWithoutUsuariosInput, rutasUncheckedCreateWithoutUsuariosInput>
  }

  export type rutasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: rutasWhereUniqueInput
    data: XOR<rutasUpdateWithoutUsuariosInput, rutasUncheckedUpdateWithoutUsuariosInput>
  }

  export type rutasUpdateManyWithWhereWithoutUsuariosInput = {
    where: rutasScalarWhereInput
    data: XOR<rutasUpdateManyMutationInput, rutasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ubicacionUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ubicacionWhereUniqueInput
    update: XOR<ubicacionUpdateWithoutUsuariosInput, ubicacionUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ubicacionCreateWithoutUsuariosInput, ubicacionUncheckedCreateWithoutUsuariosInput>
  }

  export type ubicacionUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ubicacionWhereUniqueInput
    data: XOR<ubicacionUpdateWithoutUsuariosInput, ubicacionUncheckedUpdateWithoutUsuariosInput>
  }

  export type ubicacionUpdateManyWithWhereWithoutUsuariosInput = {
    where: ubicacionScalarWhereInput
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ubicacionScalarWhereInput = {
    AND?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
    OR?: ubicacionScalarWhereInput[]
    NOT?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
    id_ubicacion?: IntFilter<"ubicacion"> | number
    id_usuario?: IntNullableFilter<"ubicacion"> | number | null
    latitud?: DecimalFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"ubicacion"> | Decimal | DecimalJsLike | number | string
    nombre?: StringNullableFilter<"ubicacion"> | string | null
  }

  export type tipo_eventoCreateWithoutEventosInput = {
    nombre: string
  }

  export type tipo_eventoUncheckedCreateWithoutEventosInput = {
    id_tipo_evento?: number
    nombre: string
  }

  export type tipo_eventoCreateOrConnectWithoutEventosInput = {
    where: tipo_eventoWhereUniqueInput
    create: XOR<tipo_eventoCreateWithoutEventosInput, tipo_eventoUncheckedCreateWithoutEventosInput>
  }

  export type usuariosCreateWithoutEventosInput = {
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionCreateNestedManyWithoutUsuariosInput
    rutas?: rutasCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutEventosInput = {
    id_usuario?: number
    nombre_usuario: string
    clave: string
    rol?: string | null
    correo: string
    fecha_registro?: Date | string | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutUsuariosInput
    rutas?: rutasUncheckedCreateNestedManyWithoutUsuariosInput
    ubicacion?: ubicacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutEventosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutEventosInput, usuariosUncheckedCreateWithoutEventosInput>
  }

  export type tipo_eventoUpsertWithoutEventosInput = {
    update: XOR<tipo_eventoUpdateWithoutEventosInput, tipo_eventoUncheckedUpdateWithoutEventosInput>
    create: XOR<tipo_eventoCreateWithoutEventosInput, tipo_eventoUncheckedCreateWithoutEventosInput>
    where?: tipo_eventoWhereInput
  }

  export type tipo_eventoUpdateToOneWithWhereWithoutEventosInput = {
    where?: tipo_eventoWhereInput
    data: XOR<tipo_eventoUpdateWithoutEventosInput, tipo_eventoUncheckedUpdateWithoutEventosInput>
  }

  export type tipo_eventoUpdateWithoutEventosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_eventoUncheckedUpdateWithoutEventosInput = {
    id_tipo_evento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUpsertWithoutEventosInput = {
    update: XOR<usuariosUpdateWithoutEventosInput, usuariosUncheckedUpdateWithoutEventosInput>
    create: XOR<usuariosCreateWithoutEventosInput, usuariosUncheckedCreateWithoutEventosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutEventosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutEventosInput, usuariosUncheckedUpdateWithoutEventosInput>
  }

  export type usuariosUpdateWithoutEventosInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutEventosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calificacion?: calificacionUncheckedUpdateManyWithoutUsuariosNestedInput
    rutas?: rutasUncheckedUpdateManyWithoutUsuariosNestedInput
    ubicacion?: ubicacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type detalle_rutaCreateManyRutasInput = {
    id_detalle_ruta?: number
    id_zona_segura?: number | null
    id_evento?: number | null
    fecha_registro?: Date | string | null
  }

  export type detalle_rutaUpdateWithoutRutasInput = {
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_rutaUncheckedUpdateWithoutRutasInput = {
    id_detalle_ruta?: IntFieldUpdateOperationsInput | number
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_rutaUncheckedUpdateManyWithoutRutasInput = {
    id_detalle_ruta?: IntFieldUpdateOperationsInput | number
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosCreateManyTipo_eventoInput = {
    id_evento?: number
    descripcion?: string | null
    id_usuario?: number | null
    fecha_registro?: Date | string | null
  }

  export type eventosUpdateWithoutTipo_eventoInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateWithoutTipo_eventoInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosUncheckedUpdateManyWithoutTipo_eventoInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rutasCreateManyUbicacion_rutas_id_destinoToubicacionInput = {
    id_ruta?: number
    id_usuario?: number | null
    riesgo?: number | null
    id_origen?: number | null
    favorito?: boolean | null
  }

  export type rutasCreateManyUbicacion_rutas_id_origenToubicacionInput = {
    id_ruta?: number
    id_usuario?: number | null
    riesgo?: number | null
    id_destino?: number | null
    favorito?: boolean | null
  }

  export type rutasUpdateWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUpdateManyWithoutRutasNestedInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_origenToubicacionNestedInput
    usuarios?: usuariosUpdateOneWithoutRutasNestedInput
  }

  export type rutasUncheckedUpdateWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_origen?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUncheckedUpdateManyWithoutRutasNestedInput
  }

  export type rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_origen?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type rutasUpdateWithoutUbicacion_rutas_id_origenToubicacionInput = {
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUpdateManyWithoutRutasNestedInput
    ubicacion_rutas_id_destinoToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_destinoToubicacionNestedInput
    usuarios?: usuariosUpdateOneWithoutRutasNestedInput
  }

  export type rutasUncheckedUpdateWithoutUbicacion_rutas_id_origenToubicacionInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_destino?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUncheckedUpdateManyWithoutRutasNestedInput
  }

  export type rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_origenToubicacionInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_destino?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type calificacionCreateManyUsuariosInput = {
    id_calificacion?: number
    calificacion?: number | null
    comentario?: string | null
    id_evento?: number | null
    id_zona_segura?: number | null
    tipo_calificacion?: string | null
  }

  export type eventosCreateManyUsuariosInput = {
    id_evento?: number
    id_tipo_evento?: number | null
    descripcion?: string | null
    fecha_registro?: Date | string | null
  }

  export type rutasCreateManyUsuariosInput = {
    id_ruta?: number
    riesgo?: number | null
    id_origen?: number | null
    id_destino?: number | null
    favorito?: boolean | null
  }

  export type ubicacionCreateManyUsuariosInput = {
    id_ubicacion?: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    nombre?: string | null
  }

  export type calificacionUpdateWithoutUsuariosInput = {
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_calificacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calificacionUncheckedUpdateWithoutUsuariosInput = {
    id_calificacion?: IntFieldUpdateOperationsInput | number
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_calificacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calificacionUncheckedUpdateManyWithoutUsuariosInput = {
    id_calificacion?: IntFieldUpdateOperationsInput | number
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_zona_segura?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_calificacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventosUpdateWithoutUsuariosInput = {
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_evento?: tipo_eventoUpdateOneWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateWithoutUsuariosInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_tipo_evento?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosUncheckedUpdateManyWithoutUsuariosInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_tipo_evento?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rutasUpdateWithoutUsuariosInput = {
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUpdateManyWithoutRutasNestedInput
    ubicacion_rutas_id_destinoToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_destinoToubicacionNestedInput
    ubicacion_rutas_id_origenToubicacion?: ubicacionUpdateOneWithoutRutas_rutas_id_origenToubicacionNestedInput
  }

  export type rutasUncheckedUpdateWithoutUsuariosInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_origen?: NullableIntFieldUpdateOperationsInput | number | null
    id_destino?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_ruta?: detalle_rutaUncheckedUpdateManyWithoutRutasNestedInput
  }

  export type rutasUncheckedUpdateManyWithoutUsuariosInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    riesgo?: NullableIntFieldUpdateOperationsInput | number | null
    id_origen?: NullableIntFieldUpdateOperationsInput | number | null
    id_destino?: NullableIntFieldUpdateOperationsInput | number | null
    favorito?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ubicacionUpdateWithoutUsuariosInput = {
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_destinoToubicacion?: rutasUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput
    rutas_rutas_id_origenToubicacion?: rutasUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput
  }

  export type ubicacionUncheckedUpdateWithoutUsuariosInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rutas_rutas_id_destinoToubicacion?: rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_destinoToubicacionNestedInput
    rutas_rutas_id_origenToubicacion?: rutasUncheckedUpdateManyWithoutUbicacion_rutas_id_origenToubicacionNestedInput
  }

  export type ubicacionUncheckedUpdateManyWithoutUsuariosInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}