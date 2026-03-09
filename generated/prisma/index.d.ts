
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
 * Model Teacher
 * Teacher in the school.
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Subject
 * Academic subject, e.g. Mathematics, Science.
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model ClassSection
 * Combination of class (grade) and section, e.g. "10" - "A".
 */
export type ClassSection = $Result.DefaultSelection<Prisma.$ClassSectionPayload>
/**
 * Model TeacherSubject
 * Join table mapping which teacher can teach which subject.
 */
export type TeacherSubject = $Result.DefaultSelection<Prisma.$TeacherSubjectPayload>
/**
 * Model TeacherAttendance
 * Daily attendance of teachers.
 */
export type TeacherAttendance = $Result.DefaultSelection<Prisma.$TeacherAttendancePayload>
/**
 * Model ClassSchedule
 * Class schedule for a particular period / time slot.
 */
export type ClassSchedule = $Result.DefaultSelection<Prisma.$ClassSchedulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  Present: 'Present',
  Absent: 'Absent',
  Leave: 'Leave'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const ScheduleStatus: {
  Scheduled: 'Scheduled',
  Cancelled: 'Cancelled',
  SubstituteAssigned: 'SubstituteAssigned'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Teachers
 * const teachers = await prisma.teacher.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Teachers
   * const teachers = await prisma.teacher.findMany()
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
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classSection`: Exposes CRUD operations for the **ClassSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSections
    * const classSections = await prisma.classSection.findMany()
    * ```
    */
  get classSection(): Prisma.ClassSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherSubject`: Exposes CRUD operations for the **TeacherSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSubjects
    * const teacherSubjects = await prisma.teacherSubject.findMany()
    * ```
    */
  get teacherSubject(): Prisma.TeacherSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherAttendance`: Exposes CRUD operations for the **TeacherAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherAttendances
    * const teacherAttendances = await prisma.teacherAttendance.findMany()
    * ```
    */
  get teacherAttendance(): Prisma.TeacherAttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classSchedule`: Exposes CRUD operations for the **ClassSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSchedules
    * const classSchedules = await prisma.classSchedule.findMany()
    * ```
    */
  get classSchedule(): Prisma.ClassScheduleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Teacher: 'Teacher',
    Subject: 'Subject',
    ClassSection: 'ClassSection',
    TeacherSubject: 'TeacherSubject',
    TeacherAttendance: 'TeacherAttendance',
    ClassSchedule: 'ClassSchedule'
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
      modelProps: "teacher" | "subject" | "classSection" | "teacherSubject" | "teacherAttendance" | "classSchedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      ClassSection: {
        payload: Prisma.$ClassSectionPayload<ExtArgs>
        fields: Prisma.ClassSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>
          }
          findFirst: {
            args: Prisma.ClassSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>
          }
          findMany: {
            args: Prisma.ClassSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>[]
          }
          create: {
            args: Prisma.ClassSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>
          }
          createMany: {
            args: Prisma.ClassSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>[]
          }
          delete: {
            args: Prisma.ClassSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>
          }
          update: {
            args: Prisma.ClassSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>
          }
          deleteMany: {
            args: Prisma.ClassSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>[]
          }
          upsert: {
            args: Prisma.ClassSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSectionPayload>
          }
          aggregate: {
            args: Prisma.ClassSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSection>
          }
          groupBy: {
            args: Prisma.ClassSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassSectionCountArgs<ExtArgs>
            result: $Utils.Optional<ClassSectionCountAggregateOutputType> | number
          }
        }
      }
      TeacherSubject: {
        payload: Prisma.$TeacherSubjectPayload<ExtArgs>
        fields: Prisma.TeacherSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findFirst: {
            args: Prisma.TeacherSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findMany: {
            args: Prisma.TeacherSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          create: {
            args: Prisma.TeacherSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          createMany: {
            args: Prisma.TeacherSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          delete: {
            args: Prisma.TeacherSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          update: {
            args: Prisma.TeacherSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TeacherSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          aggregate: {
            args: Prisma.TeacherSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSubject>
          }
          groupBy: {
            args: Prisma.TeacherSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectCountAggregateOutputType> | number
          }
        }
      }
      TeacherAttendance: {
        payload: Prisma.$TeacherAttendancePayload<ExtArgs>
        fields: Prisma.TeacherAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>
          }
          findFirst: {
            args: Prisma.TeacherAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>
          }
          findMany: {
            args: Prisma.TeacherAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>[]
          }
          create: {
            args: Prisma.TeacherAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>
          }
          createMany: {
            args: Prisma.TeacherAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>[]
          }
          delete: {
            args: Prisma.TeacherAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>
          }
          update: {
            args: Prisma.TeacherAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>
          }
          deleteMany: {
            args: Prisma.TeacherAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>[]
          }
          upsert: {
            args: Prisma.TeacherAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>
          }
          aggregate: {
            args: Prisma.TeacherAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherAttendance>
          }
          groupBy: {
            args: Prisma.TeacherAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherAttendanceCountAggregateOutputType> | number
          }
        }
      }
      ClassSchedule: {
        payload: Prisma.$ClassSchedulePayload<ExtArgs>
        fields: Prisma.ClassScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          findFirst: {
            args: Prisma.ClassScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          findMany: {
            args: Prisma.ClassScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>[]
          }
          create: {
            args: Prisma.ClassScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          createMany: {
            args: Prisma.ClassScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>[]
          }
          delete: {
            args: Prisma.ClassScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          update: {
            args: Prisma.ClassScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ClassScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>[]
          }
          upsert: {
            args: Prisma.ClassScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          aggregate: {
            args: Prisma.ClassScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSchedule>
          }
          groupBy: {
            args: Prisma.ClassScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    teacher?: TeacherOmit
    subject?: SubjectOmit
    classSection?: ClassSectionOmit
    teacherSubject?: TeacherSubjectOmit
    teacherAttendance?: TeacherAttendanceOmit
    classSchedule?: ClassScheduleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    subjects: number
    schedules: number
    substituteClasses: number
    attendanceRecords: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | TeacherCountOutputTypeCountSubjectsArgs
    schedules?: boolean | TeacherCountOutputTypeCountSchedulesArgs
    substituteClasses?: boolean | TeacherCountOutputTypeCountSubstituteClassesArgs
    attendanceRecords?: boolean | TeacherCountOutputTypeCountAttendanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubstituteClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAttendanceWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    teacherSubjects: number
    schedules: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSubjects?: boolean | SubjectCountOutputTypeCountTeacherSubjectsArgs
    schedules?: boolean | SubjectCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeacherSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
  }


  /**
   * Count Type ClassSectionCountOutputType
   */

  export type ClassSectionCountOutputType = {
    schedules: number
  }

  export type ClassSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | ClassSectionCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ClassSectionCountOutputType without action
   */
  export type ClassSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSectionCountOutputType
     */
    select?: ClassSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassSectionCountOutputType without action
   */
  export type ClassSectionCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    name: string
    email: string
    createdAt: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    schedules?: boolean | Teacher$schedulesArgs<ExtArgs>
    substituteClasses?: boolean | Teacher$substituteClassesArgs<ExtArgs>
    attendanceRecords?: boolean | Teacher$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    schedules?: boolean | Teacher$schedulesArgs<ExtArgs>
    substituteClasses?: boolean | Teacher$substituteClassesArgs<ExtArgs>
    attendanceRecords?: boolean | Teacher$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      subjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
      schedules: Prisma.$ClassSchedulePayload<ExtArgs>[]
      substituteClasses: Prisma.$ClassSchedulePayload<ExtArgs>[]
      attendanceRecords: Prisma.$TeacherAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Teacher$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Teacher$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    substituteClasses<T extends Teacher$substituteClassesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$substituteClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendanceRecords<T extends Teacher$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.subjects
   */
  export type Teacher$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Teacher.schedules
   */
  export type Teacher$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    cursor?: ClassScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * Teacher.substituteClasses
   */
  export type Teacher$substituteClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    cursor?: ClassScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * Teacher.attendanceRecords
   */
  export type Teacher$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    where?: TeacherAttendanceWhereInput
    orderBy?: TeacherAttendanceOrderByWithRelationInput | TeacherAttendanceOrderByWithRelationInput[]
    cursor?: TeacherAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherAttendanceScalarFieldEnum | TeacherAttendanceScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherSubjects?: boolean | Subject$teacherSubjectsArgs<ExtArgs>
    schedules?: boolean | Subject$schedulesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSubjects?: boolean | Subject$teacherSubjectsArgs<ExtArgs>
    schedules?: boolean | Subject$schedulesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      teacherSubjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
      schedules: Prisma.$ClassSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherSubjects<T extends Subject$teacherSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teacherSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Subject$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.teacherSubjects
   */
  export type Subject$teacherSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Subject.schedules
   */
  export type Subject$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    cursor?: ClassScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model ClassSection
   */

  export type AggregateClassSection = {
    _count: ClassSectionCountAggregateOutputType | null
    _avg: ClassSectionAvgAggregateOutputType | null
    _sum: ClassSectionSumAggregateOutputType | null
    _min: ClassSectionMinAggregateOutputType | null
    _max: ClassSectionMaxAggregateOutputType | null
  }

  export type ClassSectionAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassSectionSumAggregateOutputType = {
    id: number | null
  }

  export type ClassSectionMinAggregateOutputType = {
    id: number | null
    className: string | null
    section: string | null
  }

  export type ClassSectionMaxAggregateOutputType = {
    id: number | null
    className: string | null
    section: string | null
  }

  export type ClassSectionCountAggregateOutputType = {
    id: number
    className: number
    section: number
    _all: number
  }


  export type ClassSectionAvgAggregateInputType = {
    id?: true
  }

  export type ClassSectionSumAggregateInputType = {
    id?: true
  }

  export type ClassSectionMinAggregateInputType = {
    id?: true
    className?: true
    section?: true
  }

  export type ClassSectionMaxAggregateInputType = {
    id?: true
    className?: true
    section?: true
  }

  export type ClassSectionCountAggregateInputType = {
    id?: true
    className?: true
    section?: true
    _all?: true
  }

  export type ClassSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSection to aggregate.
     */
    where?: ClassSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSections to fetch.
     */
    orderBy?: ClassSectionOrderByWithRelationInput | ClassSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSections
    **/
    _count?: true | ClassSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassSectionMaxAggregateInputType
  }

  export type GetClassSectionAggregateType<T extends ClassSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSection[P]>
      : GetScalarType<T[P], AggregateClassSection[P]>
  }




  export type ClassSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSectionWhereInput
    orderBy?: ClassSectionOrderByWithAggregationInput | ClassSectionOrderByWithAggregationInput[]
    by: ClassSectionScalarFieldEnum[] | ClassSectionScalarFieldEnum
    having?: ClassSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassSectionCountAggregateInputType | true
    _avg?: ClassSectionAvgAggregateInputType
    _sum?: ClassSectionSumAggregateInputType
    _min?: ClassSectionMinAggregateInputType
    _max?: ClassSectionMaxAggregateInputType
  }

  export type ClassSectionGroupByOutputType = {
    id: number
    className: string
    section: string
    _count: ClassSectionCountAggregateOutputType | null
    _avg: ClassSectionAvgAggregateOutputType | null
    _sum: ClassSectionSumAggregateOutputType | null
    _min: ClassSectionMinAggregateOutputType | null
    _max: ClassSectionMaxAggregateOutputType | null
  }

  type GetClassSectionGroupByPayload<T extends ClassSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassSectionGroupByOutputType[P]>
            : GetScalarType<T[P], ClassSectionGroupByOutputType[P]>
        }
      >
    >


  export type ClassSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    section?: boolean
    schedules?: boolean | ClassSection$schedulesArgs<ExtArgs>
    _count?: boolean | ClassSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSection"]>

  export type ClassSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    section?: boolean
  }, ExtArgs["result"]["classSection"]>

  export type ClassSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    section?: boolean
  }, ExtArgs["result"]["classSection"]>

  export type ClassSectionSelectScalar = {
    id?: boolean
    className?: boolean
    section?: boolean
  }

  export type ClassSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "className" | "section", ExtArgs["result"]["classSection"]>
  export type ClassSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | ClassSection$schedulesArgs<ExtArgs>
    _count?: boolean | ClassSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSection"
    objects: {
      schedules: Prisma.$ClassSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      className: string
      section: string
    }, ExtArgs["result"]["classSection"]>
    composites: {}
  }

  type ClassSectionGetPayload<S extends boolean | null | undefined | ClassSectionDefaultArgs> = $Result.GetResult<Prisma.$ClassSectionPayload, S>

  type ClassSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassSectionCountAggregateInputType | true
    }

  export interface ClassSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSection'], meta: { name: 'ClassSection' } }
    /**
     * Find zero or one ClassSection that matches the filter.
     * @param {ClassSectionFindUniqueArgs} args - Arguments to find a ClassSection
     * @example
     * // Get one ClassSection
     * const classSection = await prisma.classSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassSectionFindUniqueArgs>(args: SelectSubset<T, ClassSectionFindUniqueArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassSectionFindUniqueOrThrowArgs} args - Arguments to find a ClassSection
     * @example
     * // Get one ClassSection
     * const classSection = await prisma.classSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSectionFindFirstArgs} args - Arguments to find a ClassSection
     * @example
     * // Get one ClassSection
     * const classSection = await prisma.classSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassSectionFindFirstArgs>(args?: SelectSubset<T, ClassSectionFindFirstArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSectionFindFirstOrThrowArgs} args - Arguments to find a ClassSection
     * @example
     * // Get one ClassSection
     * const classSection = await prisma.classSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSections
     * const classSections = await prisma.classSection.findMany()
     * 
     * // Get first 10 ClassSections
     * const classSections = await prisma.classSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classSectionWithIdOnly = await prisma.classSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassSectionFindManyArgs>(args?: SelectSubset<T, ClassSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassSection.
     * @param {ClassSectionCreateArgs} args - Arguments to create a ClassSection.
     * @example
     * // Create one ClassSection
     * const ClassSection = await prisma.classSection.create({
     *   data: {
     *     // ... data to create a ClassSection
     *   }
     * })
     * 
     */
    create<T extends ClassSectionCreateArgs>(args: SelectSubset<T, ClassSectionCreateArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassSections.
     * @param {ClassSectionCreateManyArgs} args - Arguments to create many ClassSections.
     * @example
     * // Create many ClassSections
     * const classSection = await prisma.classSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassSectionCreateManyArgs>(args?: SelectSubset<T, ClassSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassSections and returns the data saved in the database.
     * @param {ClassSectionCreateManyAndReturnArgs} args - Arguments to create many ClassSections.
     * @example
     * // Create many ClassSections
     * const classSection = await prisma.classSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassSections and only return the `id`
     * const classSectionWithIdOnly = await prisma.classSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassSection.
     * @param {ClassSectionDeleteArgs} args - Arguments to delete one ClassSection.
     * @example
     * // Delete one ClassSection
     * const ClassSection = await prisma.classSection.delete({
     *   where: {
     *     // ... filter to delete one ClassSection
     *   }
     * })
     * 
     */
    delete<T extends ClassSectionDeleteArgs>(args: SelectSubset<T, ClassSectionDeleteArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassSection.
     * @param {ClassSectionUpdateArgs} args - Arguments to update one ClassSection.
     * @example
     * // Update one ClassSection
     * const classSection = await prisma.classSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassSectionUpdateArgs>(args: SelectSubset<T, ClassSectionUpdateArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassSections.
     * @param {ClassSectionDeleteManyArgs} args - Arguments to filter ClassSections to delete.
     * @example
     * // Delete a few ClassSections
     * const { count } = await prisma.classSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassSectionDeleteManyArgs>(args?: SelectSubset<T, ClassSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSections
     * const classSection = await prisma.classSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassSectionUpdateManyArgs>(args: SelectSubset<T, ClassSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSections and returns the data updated in the database.
     * @param {ClassSectionUpdateManyAndReturnArgs} args - Arguments to update many ClassSections.
     * @example
     * // Update many ClassSections
     * const classSection = await prisma.classSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassSections and only return the `id`
     * const classSectionWithIdOnly = await prisma.classSection.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClassSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassSection.
     * @param {ClassSectionUpsertArgs} args - Arguments to update or create a ClassSection.
     * @example
     * // Update or create a ClassSection
     * const classSection = await prisma.classSection.upsert({
     *   create: {
     *     // ... data to create a ClassSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSection we want to update
     *   }
     * })
     */
    upsert<T extends ClassSectionUpsertArgs>(args: SelectSubset<T, ClassSectionUpsertArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSectionCountArgs} args - Arguments to filter ClassSections to count.
     * @example
     * // Count the number of ClassSections
     * const count = await prisma.classSection.count({
     *   where: {
     *     // ... the filter for the ClassSections we want to count
     *   }
     * })
    **/
    count<T extends ClassSectionCountArgs>(
      args?: Subset<T, ClassSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassSectionAggregateArgs>(args: Subset<T, ClassSectionAggregateArgs>): Prisma.PrismaPromise<GetClassSectionAggregateType<T>>

    /**
     * Group by ClassSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSectionGroupByArgs} args - Group by arguments.
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
      T extends ClassSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassSectionGroupByArgs['orderBy'] }
        : { orderBy?: ClassSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSection model
   */
  readonly fields: ClassSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedules<T extends ClassSection$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, ClassSection$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClassSection model
   */
  interface ClassSectionFieldRefs {
    readonly id: FieldRef<"ClassSection", 'Int'>
    readonly className: FieldRef<"ClassSection", 'String'>
    readonly section: FieldRef<"ClassSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClassSection findUnique
   */
  export type ClassSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSection to fetch.
     */
    where: ClassSectionWhereUniqueInput
  }

  /**
   * ClassSection findUniqueOrThrow
   */
  export type ClassSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSection to fetch.
     */
    where: ClassSectionWhereUniqueInput
  }

  /**
   * ClassSection findFirst
   */
  export type ClassSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSection to fetch.
     */
    where?: ClassSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSections to fetch.
     */
    orderBy?: ClassSectionOrderByWithRelationInput | ClassSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSections.
     */
    cursor?: ClassSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSections.
     */
    distinct?: ClassSectionScalarFieldEnum | ClassSectionScalarFieldEnum[]
  }

  /**
   * ClassSection findFirstOrThrow
   */
  export type ClassSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSection to fetch.
     */
    where?: ClassSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSections to fetch.
     */
    orderBy?: ClassSectionOrderByWithRelationInput | ClassSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSections.
     */
    cursor?: ClassSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSections.
     */
    distinct?: ClassSectionScalarFieldEnum | ClassSectionScalarFieldEnum[]
  }

  /**
   * ClassSection findMany
   */
  export type ClassSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSections to fetch.
     */
    where?: ClassSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSections to fetch.
     */
    orderBy?: ClassSectionOrderByWithRelationInput | ClassSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSections.
     */
    cursor?: ClassSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSections.
     */
    skip?: number
    distinct?: ClassSectionScalarFieldEnum | ClassSectionScalarFieldEnum[]
  }

  /**
   * ClassSection create
   */
  export type ClassSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassSection.
     */
    data: XOR<ClassSectionCreateInput, ClassSectionUncheckedCreateInput>
  }

  /**
   * ClassSection createMany
   */
  export type ClassSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSections.
     */
    data: ClassSectionCreateManyInput | ClassSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassSection createManyAndReturn
   */
  export type ClassSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * The data used to create many ClassSections.
     */
    data: ClassSectionCreateManyInput | ClassSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassSection update
   */
  export type ClassSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassSection.
     */
    data: XOR<ClassSectionUpdateInput, ClassSectionUncheckedUpdateInput>
    /**
     * Choose, which ClassSection to update.
     */
    where: ClassSectionWhereUniqueInput
  }

  /**
   * ClassSection updateMany
   */
  export type ClassSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSections.
     */
    data: XOR<ClassSectionUpdateManyMutationInput, ClassSectionUncheckedUpdateManyInput>
    /**
     * Filter which ClassSections to update
     */
    where?: ClassSectionWhereInput
    /**
     * Limit how many ClassSections to update.
     */
    limit?: number
  }

  /**
   * ClassSection updateManyAndReturn
   */
  export type ClassSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * The data used to update ClassSections.
     */
    data: XOR<ClassSectionUpdateManyMutationInput, ClassSectionUncheckedUpdateManyInput>
    /**
     * Filter which ClassSections to update
     */
    where?: ClassSectionWhereInput
    /**
     * Limit how many ClassSections to update.
     */
    limit?: number
  }

  /**
   * ClassSection upsert
   */
  export type ClassSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassSection to update in case it exists.
     */
    where: ClassSectionWhereUniqueInput
    /**
     * In case the ClassSection found by the `where` argument doesn't exist, create a new ClassSection with this data.
     */
    create: XOR<ClassSectionCreateInput, ClassSectionUncheckedCreateInput>
    /**
     * In case the ClassSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassSectionUpdateInput, ClassSectionUncheckedUpdateInput>
  }

  /**
   * ClassSection delete
   */
  export type ClassSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
    /**
     * Filter which ClassSection to delete.
     */
    where: ClassSectionWhereUniqueInput
  }

  /**
   * ClassSection deleteMany
   */
  export type ClassSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSections to delete
     */
    where?: ClassSectionWhereInput
    /**
     * Limit how many ClassSections to delete.
     */
    limit?: number
  }

  /**
   * ClassSection.schedules
   */
  export type ClassSection$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    cursor?: ClassScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSection without action
   */
  export type ClassSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSection
     */
    select?: ClassSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSection
     */
    omit?: ClassSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSectionInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSubject
   */

  export type AggregateTeacherSubject = {
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  export type TeacherSubjectAvgAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectSumAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectMinAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectMaxAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectCountAggregateOutputType = {
    teacherId: number
    subjectId: number
    _all: number
  }


  export type TeacherSubjectAvgAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectSumAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectMinAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectMaxAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectCountAggregateInputType = {
    teacherId?: true
    subjectId?: true
    _all?: true
  }

  export type TeacherSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubject to aggregate.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSubjects
    **/
    _count?: true | TeacherSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type GetTeacherSubjectAggregateType<T extends TeacherSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSubject[P]>
      : GetScalarType<T[P], AggregateTeacherSubject[P]>
  }




  export type TeacherSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithAggregationInput | TeacherSubjectOrderByWithAggregationInput[]
    by: TeacherSubjectScalarFieldEnum[] | TeacherSubjectScalarFieldEnum
    having?: TeacherSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSubjectCountAggregateInputType | true
    _avg?: TeacherSubjectAvgAggregateInputType
    _sum?: TeacherSubjectSumAggregateInputType
    _min?: TeacherSubjectMinAggregateInputType
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type TeacherSubjectGroupByOutputType = {
    teacherId: number
    subjectId: number
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  type GetTeacherSubjectGroupByPayload<T extends TeacherSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    subjectId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    subjectId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    subjectId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectScalar = {
    teacherId?: boolean
    subjectId?: boolean
  }

  export type TeacherSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"teacherId" | "subjectId", ExtArgs["result"]["teacherSubject"]>
  export type TeacherSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TeacherSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSubject"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      teacherId: number
      subjectId: number
    }, ExtArgs["result"]["teacherSubject"]>
    composites: {}
  }

  type TeacherSubjectGetPayload<S extends boolean | null | undefined | TeacherSubjectDefaultArgs> = $Result.GetResult<Prisma.$TeacherSubjectPayload, S>

  type TeacherSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherSubjectCountAggregateInputType | true
    }

  export interface TeacherSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSubject'], meta: { name: 'TeacherSubject' } }
    /**
     * Find zero or one TeacherSubject that matches the filter.
     * @param {TeacherSubjectFindUniqueArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSubjectFindUniqueArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherSubjectFindUniqueOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSubjectFindFirstArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany()
     * 
     * // Get first 10 TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany({ take: 10 })
     * 
     * // Only select the `teacherId`
     * const teacherSubjectWithTeacherIdOnly = await prisma.teacherSubject.findMany({ select: { teacherId: true } })
     * 
     */
    findMany<T extends TeacherSubjectFindManyArgs>(args?: SelectSubset<T, TeacherSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherSubject.
     * @param {TeacherSubjectCreateArgs} args - Arguments to create a TeacherSubject.
     * @example
     * // Create one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.create({
     *   data: {
     *     // ... data to create a TeacherSubject
     *   }
     * })
     * 
     */
    create<T extends TeacherSubjectCreateArgs>(args: SelectSubset<T, TeacherSubjectCreateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherSubjects.
     * @param {TeacherSubjectCreateManyArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSubjectCreateManyArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSubjects and returns the data saved in the database.
     * @param {TeacherSubjectCreateManyAndReturnArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSubjects and only return the `teacherId`
     * const teacherSubjectWithTeacherIdOnly = await prisma.teacherSubject.createManyAndReturn({
     *   select: { teacherId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherSubject.
     * @param {TeacherSubjectDeleteArgs} args - Arguments to delete one TeacherSubject.
     * @example
     * // Delete one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.delete({
     *   where: {
     *     // ... filter to delete one TeacherSubject
     *   }
     * })
     * 
     */
    delete<T extends TeacherSubjectDeleteArgs>(args: SelectSubset<T, TeacherSubjectDeleteArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherSubject.
     * @param {TeacherSubjectUpdateArgs} args - Arguments to update one TeacherSubject.
     * @example
     * // Update one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSubjectUpdateArgs>(args: SelectSubset<T, TeacherSubjectUpdateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherSubjects.
     * @param {TeacherSubjectDeleteManyArgs} args - Arguments to filter TeacherSubjects to delete.
     * @example
     * // Delete a few TeacherSubjects
     * const { count } = await prisma.teacherSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSubjectDeleteManyArgs>(args?: SelectSubset<T, TeacherSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSubjectUpdateManyArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects and returns the data updated in the database.
     * @param {TeacherSubjectUpdateManyAndReturnArgs} args - Arguments to update many TeacherSubjects.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherSubjects and only return the `teacherId`
     * const teacherSubjectWithTeacherIdOnly = await prisma.teacherSubject.updateManyAndReturn({
     *   select: { teacherId: true },
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
    updateManyAndReturn<T extends TeacherSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherSubject.
     * @param {TeacherSubjectUpsertArgs} args - Arguments to update or create a TeacherSubject.
     * @example
     * // Update or create a TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.upsert({
     *   create: {
     *     // ... data to create a TeacherSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSubject we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSubjectUpsertArgs>(args: SelectSubset<T, TeacherSubjectUpsertArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectCountArgs} args - Arguments to filter TeacherSubjects to count.
     * @example
     * // Count the number of TeacherSubjects
     * const count = await prisma.teacherSubject.count({
     *   where: {
     *     // ... the filter for the TeacherSubjects we want to count
     *   }
     * })
    **/
    count<T extends TeacherSubjectCountArgs>(
      args?: Subset<T, TeacherSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherSubjectAggregateArgs>(args: Subset<T, TeacherSubjectAggregateArgs>): Prisma.PrismaPromise<GetTeacherSubjectAggregateType<T>>

    /**
     * Group by TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectGroupByArgs} args - Group by arguments.
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
      T extends TeacherSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSubject model
   */
  readonly fields: TeacherSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherSubject model
   */
  interface TeacherSubjectFieldRefs {
    readonly teacherId: FieldRef<"TeacherSubject", 'Int'>
    readonly subjectId: FieldRef<"TeacherSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSubject findUnique
   */
  export type TeacherSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findUniqueOrThrow
   */
  export type TeacherSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findFirst
   */
  export type TeacherSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findFirstOrThrow
   */
  export type TeacherSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findMany
   */
  export type TeacherSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubjects to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject create
   */
  export type TeacherSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSubject.
     */
    data: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
  }

  /**
   * TeacherSubject createMany
   */
  export type TeacherSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherSubject createManyAndReturn
   */
  export type TeacherSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject update
   */
  export type TeacherSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSubject.
     */
    data: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
    /**
     * Choose, which TeacherSubject to update.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject updateMany
   */
  export type TeacherSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
  }

  /**
   * TeacherSubject updateManyAndReturn
   */
  export type TeacherSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject upsert
   */
  export type TeacherSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSubject to update in case it exists.
     */
    where: TeacherSubjectWhereUniqueInput
    /**
     * In case the TeacherSubject found by the `where` argument doesn't exist, create a new TeacherSubject with this data.
     */
    create: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
    /**
     * In case the TeacherSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
  }

  /**
   * TeacherSubject delete
   */
  export type TeacherSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter which TeacherSubject to delete.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject deleteMany
   */
  export type TeacherSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubjects to delete
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to delete.
     */
    limit?: number
  }

  /**
   * TeacherSubject without action
   */
  export type TeacherSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
  }


  /**
   * Model TeacherAttendance
   */

  export type AggregateTeacherAttendance = {
    _count: TeacherAttendanceCountAggregateOutputType | null
    _avg: TeacherAttendanceAvgAggregateOutputType | null
    _sum: TeacherAttendanceSumAggregateOutputType | null
    _min: TeacherAttendanceMinAggregateOutputType | null
    _max: TeacherAttendanceMaxAggregateOutputType | null
  }

  export type TeacherAttendanceAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type TeacherAttendanceSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type TeacherAttendanceMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
  }

  export type TeacherAttendanceMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
  }

  export type TeacherAttendanceCountAggregateOutputType = {
    id: number
    teacherId: number
    date: number
    status: number
    _all: number
  }


  export type TeacherAttendanceAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type TeacherAttendanceSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type TeacherAttendanceMinAggregateInputType = {
    id?: true
    teacherId?: true
    date?: true
    status?: true
  }

  export type TeacherAttendanceMaxAggregateInputType = {
    id?: true
    teacherId?: true
    date?: true
    status?: true
  }

  export type TeacherAttendanceCountAggregateInputType = {
    id?: true
    teacherId?: true
    date?: true
    status?: true
    _all?: true
  }

  export type TeacherAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherAttendance to aggregate.
     */
    where?: TeacherAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAttendances to fetch.
     */
    orderBy?: TeacherAttendanceOrderByWithRelationInput | TeacherAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherAttendances
    **/
    _count?: true | TeacherAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherAttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherAttendanceMaxAggregateInputType
  }

  export type GetTeacherAttendanceAggregateType<T extends TeacherAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherAttendance[P]>
      : GetScalarType<T[P], AggregateTeacherAttendance[P]>
  }




  export type TeacherAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAttendanceWhereInput
    orderBy?: TeacherAttendanceOrderByWithAggregationInput | TeacherAttendanceOrderByWithAggregationInput[]
    by: TeacherAttendanceScalarFieldEnum[] | TeacherAttendanceScalarFieldEnum
    having?: TeacherAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherAttendanceCountAggregateInputType | true
    _avg?: TeacherAttendanceAvgAggregateInputType
    _sum?: TeacherAttendanceSumAggregateInputType
    _min?: TeacherAttendanceMinAggregateInputType
    _max?: TeacherAttendanceMaxAggregateInputType
  }

  export type TeacherAttendanceGroupByOutputType = {
    id: number
    teacherId: number
    date: Date
    status: $Enums.AttendanceStatus
    _count: TeacherAttendanceCountAggregateOutputType | null
    _avg: TeacherAttendanceAvgAggregateOutputType | null
    _sum: TeacherAttendanceSumAggregateOutputType | null
    _min: TeacherAttendanceMinAggregateOutputType | null
    _max: TeacherAttendanceMaxAggregateOutputType | null
  }

  type GetTeacherAttendanceGroupByPayload<T extends TeacherAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type TeacherAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    date?: boolean
    status?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAttendance"]>

  export type TeacherAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    date?: boolean
    status?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAttendance"]>

  export type TeacherAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    date?: boolean
    status?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAttendance"]>

  export type TeacherAttendanceSelectScalar = {
    id?: boolean
    teacherId?: boolean
    date?: boolean
    status?: boolean
  }

  export type TeacherAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "date" | "status", ExtArgs["result"]["teacherAttendance"]>
  export type TeacherAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type TeacherAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type TeacherAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $TeacherAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherAttendance"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      date: Date
      status: $Enums.AttendanceStatus
    }, ExtArgs["result"]["teacherAttendance"]>
    composites: {}
  }

  type TeacherAttendanceGetPayload<S extends boolean | null | undefined | TeacherAttendanceDefaultArgs> = $Result.GetResult<Prisma.$TeacherAttendancePayload, S>

  type TeacherAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherAttendanceCountAggregateInputType | true
    }

  export interface TeacherAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherAttendance'], meta: { name: 'TeacherAttendance' } }
    /**
     * Find zero or one TeacherAttendance that matches the filter.
     * @param {TeacherAttendanceFindUniqueArgs} args - Arguments to find a TeacherAttendance
     * @example
     * // Get one TeacherAttendance
     * const teacherAttendance = await prisma.teacherAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherAttendanceFindUniqueArgs>(args: SelectSubset<T, TeacherAttendanceFindUniqueArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherAttendanceFindUniqueOrThrowArgs} args - Arguments to find a TeacherAttendance
     * @example
     * // Get one TeacherAttendance
     * const teacherAttendance = await prisma.teacherAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAttendanceFindFirstArgs} args - Arguments to find a TeacherAttendance
     * @example
     * // Get one TeacherAttendance
     * const teacherAttendance = await prisma.teacherAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherAttendanceFindFirstArgs>(args?: SelectSubset<T, TeacherAttendanceFindFirstArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAttendanceFindFirstOrThrowArgs} args - Arguments to find a TeacherAttendance
     * @example
     * // Get one TeacherAttendance
     * const teacherAttendance = await prisma.teacherAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherAttendances
     * const teacherAttendances = await prisma.teacherAttendance.findMany()
     * 
     * // Get first 10 TeacherAttendances
     * const teacherAttendances = await prisma.teacherAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherAttendanceWithIdOnly = await prisma.teacherAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherAttendanceFindManyArgs>(args?: SelectSubset<T, TeacherAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherAttendance.
     * @param {TeacherAttendanceCreateArgs} args - Arguments to create a TeacherAttendance.
     * @example
     * // Create one TeacherAttendance
     * const TeacherAttendance = await prisma.teacherAttendance.create({
     *   data: {
     *     // ... data to create a TeacherAttendance
     *   }
     * })
     * 
     */
    create<T extends TeacherAttendanceCreateArgs>(args: SelectSubset<T, TeacherAttendanceCreateArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherAttendances.
     * @param {TeacherAttendanceCreateManyArgs} args - Arguments to create many TeacherAttendances.
     * @example
     * // Create many TeacherAttendances
     * const teacherAttendance = await prisma.teacherAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherAttendanceCreateManyArgs>(args?: SelectSubset<T, TeacherAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherAttendances and returns the data saved in the database.
     * @param {TeacherAttendanceCreateManyAndReturnArgs} args - Arguments to create many TeacherAttendances.
     * @example
     * // Create many TeacherAttendances
     * const teacherAttendance = await prisma.teacherAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherAttendances and only return the `id`
     * const teacherAttendanceWithIdOnly = await prisma.teacherAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherAttendance.
     * @param {TeacherAttendanceDeleteArgs} args - Arguments to delete one TeacherAttendance.
     * @example
     * // Delete one TeacherAttendance
     * const TeacherAttendance = await prisma.teacherAttendance.delete({
     *   where: {
     *     // ... filter to delete one TeacherAttendance
     *   }
     * })
     * 
     */
    delete<T extends TeacherAttendanceDeleteArgs>(args: SelectSubset<T, TeacherAttendanceDeleteArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherAttendance.
     * @param {TeacherAttendanceUpdateArgs} args - Arguments to update one TeacherAttendance.
     * @example
     * // Update one TeacherAttendance
     * const teacherAttendance = await prisma.teacherAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherAttendanceUpdateArgs>(args: SelectSubset<T, TeacherAttendanceUpdateArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherAttendances.
     * @param {TeacherAttendanceDeleteManyArgs} args - Arguments to filter TeacherAttendances to delete.
     * @example
     * // Delete a few TeacherAttendances
     * const { count } = await prisma.teacherAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherAttendanceDeleteManyArgs>(args?: SelectSubset<T, TeacherAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherAttendances
     * const teacherAttendance = await prisma.teacherAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherAttendanceUpdateManyArgs>(args: SelectSubset<T, TeacherAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherAttendances and returns the data updated in the database.
     * @param {TeacherAttendanceUpdateManyAndReturnArgs} args - Arguments to update many TeacherAttendances.
     * @example
     * // Update many TeacherAttendances
     * const teacherAttendance = await prisma.teacherAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherAttendances and only return the `id`
     * const teacherAttendanceWithIdOnly = await prisma.teacherAttendance.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TeacherAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherAttendance.
     * @param {TeacherAttendanceUpsertArgs} args - Arguments to update or create a TeacherAttendance.
     * @example
     * // Update or create a TeacherAttendance
     * const teacherAttendance = await prisma.teacherAttendance.upsert({
     *   create: {
     *     // ... data to create a TeacherAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherAttendance we want to update
     *   }
     * })
     */
    upsert<T extends TeacherAttendanceUpsertArgs>(args: SelectSubset<T, TeacherAttendanceUpsertArgs<ExtArgs>>): Prisma__TeacherAttendanceClient<$Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAttendanceCountArgs} args - Arguments to filter TeacherAttendances to count.
     * @example
     * // Count the number of TeacherAttendances
     * const count = await prisma.teacherAttendance.count({
     *   where: {
     *     // ... the filter for the TeacherAttendances we want to count
     *   }
     * })
    **/
    count<T extends TeacherAttendanceCountArgs>(
      args?: Subset<T, TeacherAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAttendanceAggregateArgs>(args: Subset<T, TeacherAttendanceAggregateArgs>): Prisma.PrismaPromise<GetTeacherAttendanceAggregateType<T>>

    /**
     * Group by TeacherAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAttendanceGroupByArgs} args - Group by arguments.
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
      T extends TeacherAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: TeacherAttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherAttendance model
   */
  readonly fields: TeacherAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherAttendance model
   */
  interface TeacherAttendanceFieldRefs {
    readonly id: FieldRef<"TeacherAttendance", 'Int'>
    readonly teacherId: FieldRef<"TeacherAttendance", 'Int'>
    readonly date: FieldRef<"TeacherAttendance", 'DateTime'>
    readonly status: FieldRef<"TeacherAttendance", 'AttendanceStatus'>
  }
    

  // Custom InputTypes
  /**
   * TeacherAttendance findUnique
   */
  export type TeacherAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAttendance to fetch.
     */
    where: TeacherAttendanceWhereUniqueInput
  }

  /**
   * TeacherAttendance findUniqueOrThrow
   */
  export type TeacherAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAttendance to fetch.
     */
    where: TeacherAttendanceWhereUniqueInput
  }

  /**
   * TeacherAttendance findFirst
   */
  export type TeacherAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAttendance to fetch.
     */
    where?: TeacherAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAttendances to fetch.
     */
    orderBy?: TeacherAttendanceOrderByWithRelationInput | TeacherAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherAttendances.
     */
    cursor?: TeacherAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherAttendances.
     */
    distinct?: TeacherAttendanceScalarFieldEnum | TeacherAttendanceScalarFieldEnum[]
  }

  /**
   * TeacherAttendance findFirstOrThrow
   */
  export type TeacherAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAttendance to fetch.
     */
    where?: TeacherAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAttendances to fetch.
     */
    orderBy?: TeacherAttendanceOrderByWithRelationInput | TeacherAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherAttendances.
     */
    cursor?: TeacherAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherAttendances.
     */
    distinct?: TeacherAttendanceScalarFieldEnum | TeacherAttendanceScalarFieldEnum[]
  }

  /**
   * TeacherAttendance findMany
   */
  export type TeacherAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAttendances to fetch.
     */
    where?: TeacherAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAttendances to fetch.
     */
    orderBy?: TeacherAttendanceOrderByWithRelationInput | TeacherAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherAttendances.
     */
    cursor?: TeacherAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAttendances.
     */
    skip?: number
    distinct?: TeacherAttendanceScalarFieldEnum | TeacherAttendanceScalarFieldEnum[]
  }

  /**
   * TeacherAttendance create
   */
  export type TeacherAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherAttendance.
     */
    data: XOR<TeacherAttendanceCreateInput, TeacherAttendanceUncheckedCreateInput>
  }

  /**
   * TeacherAttendance createMany
   */
  export type TeacherAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherAttendances.
     */
    data: TeacherAttendanceCreateManyInput | TeacherAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherAttendance createManyAndReturn
   */
  export type TeacherAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherAttendances.
     */
    data: TeacherAttendanceCreateManyInput | TeacherAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherAttendance update
   */
  export type TeacherAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherAttendance.
     */
    data: XOR<TeacherAttendanceUpdateInput, TeacherAttendanceUncheckedUpdateInput>
    /**
     * Choose, which TeacherAttendance to update.
     */
    where: TeacherAttendanceWhereUniqueInput
  }

  /**
   * TeacherAttendance updateMany
   */
  export type TeacherAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherAttendances.
     */
    data: XOR<TeacherAttendanceUpdateManyMutationInput, TeacherAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which TeacherAttendances to update
     */
    where?: TeacherAttendanceWhereInput
    /**
     * Limit how many TeacherAttendances to update.
     */
    limit?: number
  }

  /**
   * TeacherAttendance updateManyAndReturn
   */
  export type TeacherAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update TeacherAttendances.
     */
    data: XOR<TeacherAttendanceUpdateManyMutationInput, TeacherAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which TeacherAttendances to update
     */
    where?: TeacherAttendanceWhereInput
    /**
     * Limit how many TeacherAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherAttendance upsert
   */
  export type TeacherAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherAttendance to update in case it exists.
     */
    where: TeacherAttendanceWhereUniqueInput
    /**
     * In case the TeacherAttendance found by the `where` argument doesn't exist, create a new TeacherAttendance with this data.
     */
    create: XOR<TeacherAttendanceCreateInput, TeacherAttendanceUncheckedCreateInput>
    /**
     * In case the TeacherAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherAttendanceUpdateInput, TeacherAttendanceUncheckedUpdateInput>
  }

  /**
   * TeacherAttendance delete
   */
  export type TeacherAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
    /**
     * Filter which TeacherAttendance to delete.
     */
    where: TeacherAttendanceWhereUniqueInput
  }

  /**
   * TeacherAttendance deleteMany
   */
  export type TeacherAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherAttendances to delete
     */
    where?: TeacherAttendanceWhereInput
    /**
     * Limit how many TeacherAttendances to delete.
     */
    limit?: number
  }

  /**
   * TeacherAttendance without action
   */
  export type TeacherAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAttendance
     */
    select?: TeacherAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAttendance
     */
    omit?: TeacherAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model ClassSchedule
   */

  export type AggregateClassSchedule = {
    _count: ClassScheduleCountAggregateOutputType | null
    _avg: ClassScheduleAvgAggregateOutputType | null
    _sum: ClassScheduleSumAggregateOutputType | null
    _min: ClassScheduleMinAggregateOutputType | null
    _max: ClassScheduleMaxAggregateOutputType | null
  }

  export type ClassScheduleAvgAggregateOutputType = {
    id: number | null
    classSectionId: number | null
    subjectId: number | null
    teacherId: number | null
    substituteTeacherId: number | null
  }

  export type ClassScheduleSumAggregateOutputType = {
    id: number | null
    classSectionId: number | null
    subjectId: number | null
    teacherId: number | null
    substituteTeacherId: number | null
  }

  export type ClassScheduleMinAggregateOutputType = {
    id: number | null
    classSectionId: number | null
    subjectId: number | null
    teacherId: number | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.ScheduleStatus | null
    substituteTeacherId: number | null
  }

  export type ClassScheduleMaxAggregateOutputType = {
    id: number | null
    classSectionId: number | null
    subjectId: number | null
    teacherId: number | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.ScheduleStatus | null
    substituteTeacherId: number | null
  }

  export type ClassScheduleCountAggregateOutputType = {
    id: number
    classSectionId: number
    subjectId: number
    teacherId: number
    date: number
    startTime: number
    endTime: number
    status: number
    substituteTeacherId: number
    _all: number
  }


  export type ClassScheduleAvgAggregateInputType = {
    id?: true
    classSectionId?: true
    subjectId?: true
    teacherId?: true
    substituteTeacherId?: true
  }

  export type ClassScheduleSumAggregateInputType = {
    id?: true
    classSectionId?: true
    subjectId?: true
    teacherId?: true
    substituteTeacherId?: true
  }

  export type ClassScheduleMinAggregateInputType = {
    id?: true
    classSectionId?: true
    subjectId?: true
    teacherId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    substituteTeacherId?: true
  }

  export type ClassScheduleMaxAggregateInputType = {
    id?: true
    classSectionId?: true
    subjectId?: true
    teacherId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    substituteTeacherId?: true
  }

  export type ClassScheduleCountAggregateInputType = {
    id?: true
    classSectionId?: true
    subjectId?: true
    teacherId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    substituteTeacherId?: true
    _all?: true
  }

  export type ClassScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSchedule to aggregate.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSchedules
    **/
    _count?: true | ClassScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassScheduleMaxAggregateInputType
  }

  export type GetClassScheduleAggregateType<T extends ClassScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSchedule[P]>
      : GetScalarType<T[P], AggregateClassSchedule[P]>
  }




  export type ClassScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithAggregationInput | ClassScheduleOrderByWithAggregationInput[]
    by: ClassScheduleScalarFieldEnum[] | ClassScheduleScalarFieldEnum
    having?: ClassScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassScheduleCountAggregateInputType | true
    _avg?: ClassScheduleAvgAggregateInputType
    _sum?: ClassScheduleSumAggregateInputType
    _min?: ClassScheduleMinAggregateInputType
    _max?: ClassScheduleMaxAggregateInputType
  }

  export type ClassScheduleGroupByOutputType = {
    id: number
    classSectionId: number
    subjectId: number
    teacherId: number
    date: Date
    startTime: Date
    endTime: Date
    status: $Enums.ScheduleStatus
    substituteTeacherId: number | null
    _count: ClassScheduleCountAggregateOutputType | null
    _avg: ClassScheduleAvgAggregateOutputType | null
    _sum: ClassScheduleSumAggregateOutputType | null
    _min: ClassScheduleMinAggregateOutputType | null
    _max: ClassScheduleMaxAggregateOutputType | null
  }

  type GetClassScheduleGroupByPayload<T extends ClassScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ClassScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ClassScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classSectionId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    substituteTeacherId?: boolean
    classSection?: boolean | ClassSectionDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    substituteTeacher?: boolean | ClassSchedule$substituteTeacherArgs<ExtArgs>
  }, ExtArgs["result"]["classSchedule"]>

  export type ClassScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classSectionId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    substituteTeacherId?: boolean
    classSection?: boolean | ClassSectionDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    substituteTeacher?: boolean | ClassSchedule$substituteTeacherArgs<ExtArgs>
  }, ExtArgs["result"]["classSchedule"]>

  export type ClassScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classSectionId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    substituteTeacherId?: boolean
    classSection?: boolean | ClassSectionDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    substituteTeacher?: boolean | ClassSchedule$substituteTeacherArgs<ExtArgs>
  }, ExtArgs["result"]["classSchedule"]>

  export type ClassScheduleSelectScalar = {
    id?: boolean
    classSectionId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    substituteTeacherId?: boolean
  }

  export type ClassScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classSectionId" | "subjectId" | "teacherId" | "date" | "startTime" | "endTime" | "status" | "substituteTeacherId", ExtArgs["result"]["classSchedule"]>
  export type ClassScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSection?: boolean | ClassSectionDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    substituteTeacher?: boolean | ClassSchedule$substituteTeacherArgs<ExtArgs>
  }
  export type ClassScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSection?: boolean | ClassSectionDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    substituteTeacher?: boolean | ClassSchedule$substituteTeacherArgs<ExtArgs>
  }
  export type ClassScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSection?: boolean | ClassSectionDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    substituteTeacher?: boolean | ClassSchedule$substituteTeacherArgs<ExtArgs>
  }

  export type $ClassSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSchedule"
    objects: {
      classSection: Prisma.$ClassSectionPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
      substituteTeacher: Prisma.$TeacherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classSectionId: number
      subjectId: number
      teacherId: number
      /**
       * Calendar date of the class (without time-of-day semantics).
       */
      date: Date
      startTime: Date
      endTime: Date
      status: $Enums.ScheduleStatus
      substituteTeacherId: number | null
    }, ExtArgs["result"]["classSchedule"]>
    composites: {}
  }

  type ClassScheduleGetPayload<S extends boolean | null | undefined | ClassScheduleDefaultArgs> = $Result.GetResult<Prisma.$ClassSchedulePayload, S>

  type ClassScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassScheduleCountAggregateInputType | true
    }

  export interface ClassScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSchedule'], meta: { name: 'ClassSchedule' } }
    /**
     * Find zero or one ClassSchedule that matches the filter.
     * @param {ClassScheduleFindUniqueArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassScheduleFindUniqueArgs>(args: SelectSubset<T, ClassScheduleFindUniqueArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassScheduleFindUniqueOrThrowArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindFirstArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassScheduleFindFirstArgs>(args?: SelectSubset<T, ClassScheduleFindFirstArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindFirstOrThrowArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSchedules
     * const classSchedules = await prisma.classSchedule.findMany()
     * 
     * // Get first 10 ClassSchedules
     * const classSchedules = await prisma.classSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classScheduleWithIdOnly = await prisma.classSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassScheduleFindManyArgs>(args?: SelectSubset<T, ClassScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassSchedule.
     * @param {ClassScheduleCreateArgs} args - Arguments to create a ClassSchedule.
     * @example
     * // Create one ClassSchedule
     * const ClassSchedule = await prisma.classSchedule.create({
     *   data: {
     *     // ... data to create a ClassSchedule
     *   }
     * })
     * 
     */
    create<T extends ClassScheduleCreateArgs>(args: SelectSubset<T, ClassScheduleCreateArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassSchedules.
     * @param {ClassScheduleCreateManyArgs} args - Arguments to create many ClassSchedules.
     * @example
     * // Create many ClassSchedules
     * const classSchedule = await prisma.classSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassScheduleCreateManyArgs>(args?: SelectSubset<T, ClassScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassSchedules and returns the data saved in the database.
     * @param {ClassScheduleCreateManyAndReturnArgs} args - Arguments to create many ClassSchedules.
     * @example
     * // Create many ClassSchedules
     * const classSchedule = await prisma.classSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassSchedules and only return the `id`
     * const classScheduleWithIdOnly = await prisma.classSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassSchedule.
     * @param {ClassScheduleDeleteArgs} args - Arguments to delete one ClassSchedule.
     * @example
     * // Delete one ClassSchedule
     * const ClassSchedule = await prisma.classSchedule.delete({
     *   where: {
     *     // ... filter to delete one ClassSchedule
     *   }
     * })
     * 
     */
    delete<T extends ClassScheduleDeleteArgs>(args: SelectSubset<T, ClassScheduleDeleteArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassSchedule.
     * @param {ClassScheduleUpdateArgs} args - Arguments to update one ClassSchedule.
     * @example
     * // Update one ClassSchedule
     * const classSchedule = await prisma.classSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassScheduleUpdateArgs>(args: SelectSubset<T, ClassScheduleUpdateArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassSchedules.
     * @param {ClassScheduleDeleteManyArgs} args - Arguments to filter ClassSchedules to delete.
     * @example
     * // Delete a few ClassSchedules
     * const { count } = await prisma.classSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassScheduleDeleteManyArgs>(args?: SelectSubset<T, ClassScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSchedules
     * const classSchedule = await prisma.classSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassScheduleUpdateManyArgs>(args: SelectSubset<T, ClassScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSchedules and returns the data updated in the database.
     * @param {ClassScheduleUpdateManyAndReturnArgs} args - Arguments to update many ClassSchedules.
     * @example
     * // Update many ClassSchedules
     * const classSchedule = await prisma.classSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassSchedules and only return the `id`
     * const classScheduleWithIdOnly = await prisma.classSchedule.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClassScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassSchedule.
     * @param {ClassScheduleUpsertArgs} args - Arguments to update or create a ClassSchedule.
     * @example
     * // Update or create a ClassSchedule
     * const classSchedule = await prisma.classSchedule.upsert({
     *   create: {
     *     // ... data to create a ClassSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ClassScheduleUpsertArgs>(args: SelectSubset<T, ClassScheduleUpsertArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleCountArgs} args - Arguments to filter ClassSchedules to count.
     * @example
     * // Count the number of ClassSchedules
     * const count = await prisma.classSchedule.count({
     *   where: {
     *     // ... the filter for the ClassSchedules we want to count
     *   }
     * })
    **/
    count<T extends ClassScheduleCountArgs>(
      args?: Subset<T, ClassScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassScheduleAggregateArgs>(args: Subset<T, ClassScheduleAggregateArgs>): Prisma.PrismaPromise<GetClassScheduleAggregateType<T>>

    /**
     * Group by ClassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleGroupByArgs} args - Group by arguments.
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
      T extends ClassScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ClassScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSchedule model
   */
  readonly fields: ClassScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classSection<T extends ClassSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassSectionDefaultArgs<ExtArgs>>): Prisma__ClassSectionClient<$Result.GetResult<Prisma.$ClassSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    substituteTeacher<T extends ClassSchedule$substituteTeacherArgs<ExtArgs> = {}>(args?: Subset<T, ClassSchedule$substituteTeacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassSchedule model
   */
  interface ClassScheduleFieldRefs {
    readonly id: FieldRef<"ClassSchedule", 'Int'>
    readonly classSectionId: FieldRef<"ClassSchedule", 'Int'>
    readonly subjectId: FieldRef<"ClassSchedule", 'Int'>
    readonly teacherId: FieldRef<"ClassSchedule", 'Int'>
    readonly date: FieldRef<"ClassSchedule", 'DateTime'>
    readonly startTime: FieldRef<"ClassSchedule", 'DateTime'>
    readonly endTime: FieldRef<"ClassSchedule", 'DateTime'>
    readonly status: FieldRef<"ClassSchedule", 'ScheduleStatus'>
    readonly substituteTeacherId: FieldRef<"ClassSchedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClassSchedule findUnique
   */
  export type ClassScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule findUniqueOrThrow
   */
  export type ClassScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule findFirst
   */
  export type ClassScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSchedules.
     */
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule findFirstOrThrow
   */
  export type ClassScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSchedules.
     */
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule findMany
   */
  export type ClassScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedules to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule create
   */
  export type ClassScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassSchedule.
     */
    data: XOR<ClassScheduleCreateInput, ClassScheduleUncheckedCreateInput>
  }

  /**
   * ClassSchedule createMany
   */
  export type ClassScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSchedules.
     */
    data: ClassScheduleCreateManyInput | ClassScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassSchedule createManyAndReturn
   */
  export type ClassScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many ClassSchedules.
     */
    data: ClassScheduleCreateManyInput | ClassScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSchedule update
   */
  export type ClassScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassSchedule.
     */
    data: XOR<ClassScheduleUpdateInput, ClassScheduleUncheckedUpdateInput>
    /**
     * Choose, which ClassSchedule to update.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule updateMany
   */
  export type ClassScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSchedules.
     */
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ClassSchedules to update
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to update.
     */
    limit?: number
  }

  /**
   * ClassSchedule updateManyAndReturn
   */
  export type ClassScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * The data used to update ClassSchedules.
     */
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ClassSchedules to update
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSchedule upsert
   */
  export type ClassScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassSchedule to update in case it exists.
     */
    where: ClassScheduleWhereUniqueInput
    /**
     * In case the ClassSchedule found by the `where` argument doesn't exist, create a new ClassSchedule with this data.
     */
    create: XOR<ClassScheduleCreateInput, ClassScheduleUncheckedCreateInput>
    /**
     * In case the ClassSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassScheduleUpdateInput, ClassScheduleUncheckedUpdateInput>
  }

  /**
   * ClassSchedule delete
   */
  export type ClassScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter which ClassSchedule to delete.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule deleteMany
   */
  export type ClassScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSchedules to delete
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to delete.
     */
    limit?: number
  }

  /**
   * ClassSchedule.substituteTeacher
   */
  export type ClassSchedule$substituteTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * ClassSchedule without action
   */
  export type ClassScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
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


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const ClassSectionScalarFieldEnum: {
    id: 'id',
    className: 'className',
    section: 'section'
  };

  export type ClassSectionScalarFieldEnum = (typeof ClassSectionScalarFieldEnum)[keyof typeof ClassSectionScalarFieldEnum]


  export const TeacherSubjectScalarFieldEnum: {
    teacherId: 'teacherId',
    subjectId: 'subjectId'
  };

  export type TeacherSubjectScalarFieldEnum = (typeof TeacherSubjectScalarFieldEnum)[keyof typeof TeacherSubjectScalarFieldEnum]


  export const TeacherAttendanceScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    date: 'date',
    status: 'status'
  };

  export type TeacherAttendanceScalarFieldEnum = (typeof TeacherAttendanceScalarFieldEnum)[keyof typeof TeacherAttendanceScalarFieldEnum]


  export const ClassScheduleScalarFieldEnum: {
    id: 'id',
    classSectionId: 'classSectionId',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    substituteTeacherId: 'substituteTeacherId'
  };

  export type ClassScheduleScalarFieldEnum = (typeof ClassScheduleScalarFieldEnum)[keyof typeof ClassScheduleScalarFieldEnum]


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
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus[]'
   */
  export type ListEnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus[]'>
    


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


  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    subjects?: TeacherSubjectListRelationFilter
    schedules?: ClassScheduleListRelationFilter
    substituteClasses?: ClassScheduleListRelationFilter
    attendanceRecords?: TeacherAttendanceListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    subjects?: TeacherSubjectOrderByRelationAggregateInput
    schedules?: ClassScheduleOrderByRelationAggregateInput
    substituteClasses?: ClassScheduleOrderByRelationAggregateInput
    attendanceRecords?: TeacherAttendanceOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    subjects?: TeacherSubjectListRelationFilter
    schedules?: ClassScheduleListRelationFilter
    substituteClasses?: ClassScheduleListRelationFilter
    attendanceRecords?: TeacherAttendanceListRelationFilter
  }, "id" | "email">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    name?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    teacherSubjects?: TeacherSubjectListRelationFilter
    schedules?: ClassScheduleListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherSubjects?: TeacherSubjectOrderByRelationAggregateInput
    schedules?: ClassScheduleOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    teacherSubjects?: TeacherSubjectListRelationFilter
    schedules?: ClassScheduleListRelationFilter
  }, "id" | "name">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
  }

  export type ClassSectionWhereInput = {
    AND?: ClassSectionWhereInput | ClassSectionWhereInput[]
    OR?: ClassSectionWhereInput[]
    NOT?: ClassSectionWhereInput | ClassSectionWhereInput[]
    id?: IntFilter<"ClassSection"> | number
    className?: StringFilter<"ClassSection"> | string
    section?: StringFilter<"ClassSection"> | string
    schedules?: ClassScheduleListRelationFilter
  }

  export type ClassSectionOrderByWithRelationInput = {
    id?: SortOrder
    className?: SortOrder
    section?: SortOrder
    schedules?: ClassScheduleOrderByRelationAggregateInput
  }

  export type ClassSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    className_section?: ClassSectionClassNameSectionCompoundUniqueInput
    AND?: ClassSectionWhereInput | ClassSectionWhereInput[]
    OR?: ClassSectionWhereInput[]
    NOT?: ClassSectionWhereInput | ClassSectionWhereInput[]
    className?: StringFilter<"ClassSection"> | string
    section?: StringFilter<"ClassSection"> | string
    schedules?: ClassScheduleListRelationFilter
  }, "id" | "className_section">

  export type ClassSectionOrderByWithAggregationInput = {
    id?: SortOrder
    className?: SortOrder
    section?: SortOrder
    _count?: ClassSectionCountOrderByAggregateInput
    _avg?: ClassSectionAvgOrderByAggregateInput
    _max?: ClassSectionMaxOrderByAggregateInput
    _min?: ClassSectionMinOrderByAggregateInput
    _sum?: ClassSectionSumOrderByAggregateInput
  }

  export type ClassSectionScalarWhereWithAggregatesInput = {
    AND?: ClassSectionScalarWhereWithAggregatesInput | ClassSectionScalarWhereWithAggregatesInput[]
    OR?: ClassSectionScalarWhereWithAggregatesInput[]
    NOT?: ClassSectionScalarWhereWithAggregatesInput | ClassSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassSection"> | number
    className?: StringWithAggregatesFilter<"ClassSection"> | string
    section?: StringWithAggregatesFilter<"ClassSection"> | string
  }

  export type TeacherSubjectWhereInput = {
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type TeacherSubjectOrderByWithRelationInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type TeacherSubjectWhereUniqueInput = Prisma.AtLeast<{
    teacherId_subjectId?: TeacherSubjectTeacherIdSubjectIdCompoundUniqueInput
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "teacherId_subjectId">

  export type TeacherSubjectOrderByWithAggregationInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
    _count?: TeacherSubjectCountOrderByAggregateInput
    _avg?: TeacherSubjectAvgOrderByAggregateInput
    _max?: TeacherSubjectMaxOrderByAggregateInput
    _min?: TeacherSubjectMinOrderByAggregateInput
    _sum?: TeacherSubjectSumOrderByAggregateInput
  }

  export type TeacherSubjectScalarWhereWithAggregatesInput = {
    AND?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    OR?: TeacherSubjectScalarWhereWithAggregatesInput[]
    NOT?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    teacherId?: IntWithAggregatesFilter<"TeacherSubject"> | number
    subjectId?: IntWithAggregatesFilter<"TeacherSubject"> | number
  }

  export type TeacherAttendanceWhereInput = {
    AND?: TeacherAttendanceWhereInput | TeacherAttendanceWhereInput[]
    OR?: TeacherAttendanceWhereInput[]
    NOT?: TeacherAttendanceWhereInput | TeacherAttendanceWhereInput[]
    id?: IntFilter<"TeacherAttendance"> | number
    teacherId?: IntFilter<"TeacherAttendance"> | number
    date?: DateTimeFilter<"TeacherAttendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"TeacherAttendance"> | $Enums.AttendanceStatus
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type TeacherAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
  }

  export type TeacherAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacherId_date?: TeacherAttendanceTeacherIdDateCompoundUniqueInput
    AND?: TeacherAttendanceWhereInput | TeacherAttendanceWhereInput[]
    OR?: TeacherAttendanceWhereInput[]
    NOT?: TeacherAttendanceWhereInput | TeacherAttendanceWhereInput[]
    teacherId?: IntFilter<"TeacherAttendance"> | number
    date?: DateTimeFilter<"TeacherAttendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"TeacherAttendance"> | $Enums.AttendanceStatus
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id" | "teacherId_date">

  export type TeacherAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: TeacherAttendanceCountOrderByAggregateInput
    _avg?: TeacherAttendanceAvgOrderByAggregateInput
    _max?: TeacherAttendanceMaxOrderByAggregateInput
    _min?: TeacherAttendanceMinOrderByAggregateInput
    _sum?: TeacherAttendanceSumOrderByAggregateInput
  }

  export type TeacherAttendanceScalarWhereWithAggregatesInput = {
    AND?: TeacherAttendanceScalarWhereWithAggregatesInput | TeacherAttendanceScalarWhereWithAggregatesInput[]
    OR?: TeacherAttendanceScalarWhereWithAggregatesInput[]
    NOT?: TeacherAttendanceScalarWhereWithAggregatesInput | TeacherAttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherAttendance"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherAttendance"> | number
    date?: DateTimeWithAggregatesFilter<"TeacherAttendance"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"TeacherAttendance"> | $Enums.AttendanceStatus
  }

  export type ClassScheduleWhereInput = {
    AND?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    OR?: ClassScheduleWhereInput[]
    NOT?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    id?: IntFilter<"ClassSchedule"> | number
    classSectionId?: IntFilter<"ClassSchedule"> | number
    subjectId?: IntFilter<"ClassSchedule"> | number
    teacherId?: IntFilter<"ClassSchedule"> | number
    date?: DateTimeFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    status?: EnumScheduleStatusFilter<"ClassSchedule"> | $Enums.ScheduleStatus
    substituteTeacherId?: IntNullableFilter<"ClassSchedule"> | number | null
    classSection?: XOR<ClassSectionScalarRelationFilter, ClassSectionWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    substituteTeacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }

  export type ClassScheduleOrderByWithRelationInput = {
    id?: SortOrder
    classSectionId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    substituteTeacherId?: SortOrderInput | SortOrder
    classSection?: ClassSectionOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    substituteTeacher?: TeacherOrderByWithRelationInput
  }

  export type ClassScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    OR?: ClassScheduleWhereInput[]
    NOT?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    classSectionId?: IntFilter<"ClassSchedule"> | number
    subjectId?: IntFilter<"ClassSchedule"> | number
    teacherId?: IntFilter<"ClassSchedule"> | number
    date?: DateTimeFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    status?: EnumScheduleStatusFilter<"ClassSchedule"> | $Enums.ScheduleStatus
    substituteTeacherId?: IntNullableFilter<"ClassSchedule"> | number | null
    classSection?: XOR<ClassSectionScalarRelationFilter, ClassSectionWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    substituteTeacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }, "id">

  export type ClassScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    classSectionId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    substituteTeacherId?: SortOrderInput | SortOrder
    _count?: ClassScheduleCountOrderByAggregateInput
    _avg?: ClassScheduleAvgOrderByAggregateInput
    _max?: ClassScheduleMaxOrderByAggregateInput
    _min?: ClassScheduleMinOrderByAggregateInput
    _sum?: ClassScheduleSumOrderByAggregateInput
  }

  export type ClassScheduleScalarWhereWithAggregatesInput = {
    AND?: ClassScheduleScalarWhereWithAggregatesInput | ClassScheduleScalarWhereWithAggregatesInput[]
    OR?: ClassScheduleScalarWhereWithAggregatesInput[]
    NOT?: ClassScheduleScalarWhereWithAggregatesInput | ClassScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassSchedule"> | number
    classSectionId?: IntWithAggregatesFilter<"ClassSchedule"> | number
    subjectId?: IntWithAggregatesFilter<"ClassSchedule"> | number
    teacherId?: IntWithAggregatesFilter<"ClassSchedule"> | number
    date?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    status?: EnumScheduleStatusWithAggregatesFilter<"ClassSchedule"> | $Enums.ScheduleStatus
    substituteTeacherId?: IntNullableWithAggregatesFilter<"ClassSchedule"> | number | null
  }

  export type TeacherCreateInput = {
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    schedules?: ClassScheduleCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleCreateNestedManyWithoutSubstituteTeacherInput
    attendanceRecords?: TeacherAttendanceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    schedules?: ClassScheduleUncheckedCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleUncheckedCreateNestedManyWithoutSubstituteTeacherInput
    attendanceRecords?: TeacherAttendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    schedules?: ClassScheduleUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUpdateManyWithoutSubstituteTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    schedules?: ClassScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUncheckedUpdateManyWithoutSubstituteTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    name: string
    teacherSubjects?: TeacherSubjectCreateNestedManyWithoutSubjectInput
    schedules?: ClassScheduleCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    name: string
    teacherSubjects?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
    schedules?: ClassScheduleUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacherSubjects?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
    schedules?: ClassScheduleUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherSubjects?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    schedules?: ClassScheduleUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    name: string
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSectionCreateInput = {
    className: string
    section: string
    schedules?: ClassScheduleCreateNestedManyWithoutClassSectionInput
  }

  export type ClassSectionUncheckedCreateInput = {
    id?: number
    className: string
    section: string
    schedules?: ClassScheduleUncheckedCreateNestedManyWithoutClassSectionInput
  }

  export type ClassSectionUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    schedules?: ClassScheduleUpdateManyWithoutClassSectionNestedInput
  }

  export type ClassSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    schedules?: ClassScheduleUncheckedUpdateManyWithoutClassSectionNestedInput
  }

  export type ClassSectionCreateManyInput = {
    id?: number
    className: string
    section: string
  }

  export type ClassSectionUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectCreateInput = {
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutTeacherSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateInput = {
    teacherId: number
    subjectId: number
  }

  export type TeacherSubjectUpdateInput = {
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSubjectCreateManyInput = {
    teacherId: number
    subjectId: number
  }

  export type TeacherSubjectUpdateManyMutationInput = {

  }

  export type TeacherSubjectUncheckedUpdateManyInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherAttendanceCreateInput = {
    date: Date | string
    status: $Enums.AttendanceStatus
    teacher: TeacherCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type TeacherAttendanceUncheckedCreateInput = {
    id?: number
    teacherId: number
    date: Date | string
    status: $Enums.AttendanceStatus
  }

  export type TeacherAttendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    teacher?: TeacherUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type TeacherAttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type TeacherAttendanceCreateManyInput = {
    id?: number
    teacherId: number
    date: Date | string
    status: $Enums.AttendanceStatus
  }

  export type TeacherAttendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type TeacherAttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type ClassScheduleCreateInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    classSection: ClassSectionCreateNestedOneWithoutSchedulesInput
    subject: SubjectCreateNestedOneWithoutSchedulesInput
    teacher: TeacherCreateNestedOneWithoutSchedulesInput
    substituteTeacher?: TeacherCreateNestedOneWithoutSubstituteClassesInput
  }

  export type ClassScheduleUncheckedCreateInput = {
    id?: number
    classSectionId: number
    subjectId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type ClassScheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    classSection?: ClassSectionUpdateOneRequiredWithoutSchedulesNestedInput
    subject?: SubjectUpdateOneRequiredWithoutSchedulesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutSchedulesNestedInput
    substituteTeacher?: TeacherUpdateOneWithoutSubstituteClassesNestedInput
  }

  export type ClassScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassScheduleCreateManyInput = {
    id?: number
    classSectionId: number
    subjectId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type ClassScheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type ClassScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeacherSubjectListRelationFilter = {
    every?: TeacherSubjectWhereInput
    some?: TeacherSubjectWhereInput
    none?: TeacherSubjectWhereInput
  }

  export type ClassScheduleListRelationFilter = {
    every?: ClassScheduleWhereInput
    some?: ClassScheduleWhereInput
    none?: ClassScheduleWhereInput
  }

  export type TeacherAttendanceListRelationFilter = {
    every?: TeacherAttendanceWhereInput
    some?: TeacherAttendanceWhereInput
    none?: TeacherAttendanceWhereInput
  }

  export type TeacherSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassSectionClassNameSectionCompoundUniqueInput = {
    className: string
    section: string
  }

  export type ClassSectionCountOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    section?: SortOrder
  }

  export type ClassSectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    section?: SortOrder
  }

  export type ClassSectionMinOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    section?: SortOrder
  }

  export type ClassSectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type TeacherSubjectTeacherIdSubjectIdCompoundUniqueInput = {
    teacherId: number
    subjectId: number
  }

  export type TeacherSubjectCountOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectAvgOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectMaxOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectMinOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectSumOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type TeacherAttendanceTeacherIdDateCompoundUniqueInput = {
    teacherId: number
    date: Date | string
  }

  export type TeacherAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type TeacherAttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type TeacherAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type TeacherAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type TeacherAttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
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

  export type ClassSectionScalarRelationFilter = {
    is?: ClassSectionWhereInput
    isNot?: ClassSectionWhereInput
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClassScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    classSectionId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    substituteTeacherId?: SortOrder
  }

  export type ClassScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    classSectionId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    substituteTeacherId?: SortOrder
  }

  export type ClassScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    classSectionId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    substituteTeacherId?: SortOrder
  }

  export type ClassScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    classSectionId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    substituteTeacherId?: SortOrder
  }

  export type ClassScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    classSectionId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    substituteTeacherId?: SortOrder
  }

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
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

  export type TeacherSubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassScheduleCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassScheduleCreateWithoutTeacherInput, ClassScheduleUncheckedCreateWithoutTeacherInput> | ClassScheduleCreateWithoutTeacherInput[] | ClassScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTeacherInput | ClassScheduleCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassScheduleCreateManyTeacherInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type ClassScheduleCreateNestedManyWithoutSubstituteTeacherInput = {
    create?: XOR<ClassScheduleCreateWithoutSubstituteTeacherInput, ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput> | ClassScheduleCreateWithoutSubstituteTeacherInput[] | ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput | ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput[]
    createMany?: ClassScheduleCreateManySubstituteTeacherInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type TeacherAttendanceCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherAttendanceCreateWithoutTeacherInput, TeacherAttendanceUncheckedCreateWithoutTeacherInput> | TeacherAttendanceCreateWithoutTeacherInput[] | TeacherAttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAttendanceCreateOrConnectWithoutTeacherInput | TeacherAttendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherAttendanceCreateManyTeacherInputEnvelope
    connect?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassScheduleUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassScheduleCreateWithoutTeacherInput, ClassScheduleUncheckedCreateWithoutTeacherInput> | ClassScheduleCreateWithoutTeacherInput[] | ClassScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTeacherInput | ClassScheduleCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassScheduleCreateManyTeacherInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type ClassScheduleUncheckedCreateNestedManyWithoutSubstituteTeacherInput = {
    create?: XOR<ClassScheduleCreateWithoutSubstituteTeacherInput, ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput> | ClassScheduleCreateWithoutSubstituteTeacherInput[] | ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput | ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput[]
    createMany?: ClassScheduleCreateManySubstituteTeacherInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type TeacherAttendanceUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherAttendanceCreateWithoutTeacherInput, TeacherAttendanceUncheckedCreateWithoutTeacherInput> | TeacherAttendanceCreateWithoutTeacherInput[] | TeacherAttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAttendanceCreateOrConnectWithoutTeacherInput | TeacherAttendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherAttendanceCreateManyTeacherInputEnvelope
    connect?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeacherSubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type ClassScheduleUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutTeacherInput, ClassScheduleUncheckedCreateWithoutTeacherInput> | ClassScheduleCreateWithoutTeacherInput[] | ClassScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTeacherInput | ClassScheduleCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutTeacherInput | ClassScheduleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassScheduleCreateManyTeacherInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutTeacherInput | ClassScheduleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutTeacherInput | ClassScheduleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type ClassScheduleUpdateManyWithoutSubstituteTeacherNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutSubstituteTeacherInput, ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput> | ClassScheduleCreateWithoutSubstituteTeacherInput[] | ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput | ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutSubstituteTeacherInput | ClassScheduleUpsertWithWhereUniqueWithoutSubstituteTeacherInput[]
    createMany?: ClassScheduleCreateManySubstituteTeacherInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutSubstituteTeacherInput | ClassScheduleUpdateWithWhereUniqueWithoutSubstituteTeacherInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutSubstituteTeacherInput | ClassScheduleUpdateManyWithWhereWithoutSubstituteTeacherInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type TeacherAttendanceUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherAttendanceCreateWithoutTeacherInput, TeacherAttendanceUncheckedCreateWithoutTeacherInput> | TeacherAttendanceCreateWithoutTeacherInput[] | TeacherAttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAttendanceCreateOrConnectWithoutTeacherInput | TeacherAttendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput | TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherAttendanceCreateManyTeacherInputEnvelope
    set?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    disconnect?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    delete?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    connect?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    update?: TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput | TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput | TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherAttendanceScalarWhereInput | TeacherAttendanceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type ClassScheduleUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutTeacherInput, ClassScheduleUncheckedCreateWithoutTeacherInput> | ClassScheduleCreateWithoutTeacherInput[] | ClassScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutTeacherInput | ClassScheduleCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutTeacherInput | ClassScheduleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassScheduleCreateManyTeacherInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutTeacherInput | ClassScheduleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutTeacherInput | ClassScheduleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type ClassScheduleUncheckedUpdateManyWithoutSubstituteTeacherNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutSubstituteTeacherInput, ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput> | ClassScheduleCreateWithoutSubstituteTeacherInput[] | ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput | ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutSubstituteTeacherInput | ClassScheduleUpsertWithWhereUniqueWithoutSubstituteTeacherInput[]
    createMany?: ClassScheduleCreateManySubstituteTeacherInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutSubstituteTeacherInput | ClassScheduleUpdateWithWhereUniqueWithoutSubstituteTeacherInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutSubstituteTeacherInput | ClassScheduleUpdateManyWithWhereWithoutSubstituteTeacherInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type TeacherAttendanceUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherAttendanceCreateWithoutTeacherInput, TeacherAttendanceUncheckedCreateWithoutTeacherInput> | TeacherAttendanceCreateWithoutTeacherInput[] | TeacherAttendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAttendanceCreateOrConnectWithoutTeacherInput | TeacherAttendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput | TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherAttendanceCreateManyTeacherInputEnvelope
    set?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    disconnect?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    delete?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    connect?: TeacherAttendanceWhereUniqueInput | TeacherAttendanceWhereUniqueInput[]
    update?: TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput | TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput | TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherAttendanceScalarWhereInput | TeacherAttendanceScalarWhereInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassScheduleCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassScheduleCreateWithoutSubjectInput, ClassScheduleUncheckedCreateWithoutSubjectInput> | ClassScheduleCreateWithoutSubjectInput[] | ClassScheduleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubjectInput | ClassScheduleCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassScheduleCreateManySubjectInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassScheduleUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassScheduleCreateWithoutSubjectInput, ClassScheduleUncheckedCreateWithoutSubjectInput> | ClassScheduleCreateWithoutSubjectInput[] | ClassScheduleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubjectInput | ClassScheduleCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassScheduleCreateManySubjectInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type TeacherSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type ClassScheduleUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutSubjectInput, ClassScheduleUncheckedCreateWithoutSubjectInput> | ClassScheduleCreateWithoutSubjectInput[] | ClassScheduleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubjectInput | ClassScheduleCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutSubjectInput | ClassScheduleUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassScheduleCreateManySubjectInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutSubjectInput | ClassScheduleUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutSubjectInput | ClassScheduleUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type ClassScheduleUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutSubjectInput, ClassScheduleUncheckedCreateWithoutSubjectInput> | ClassScheduleCreateWithoutSubjectInput[] | ClassScheduleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutSubjectInput | ClassScheduleCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutSubjectInput | ClassScheduleUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassScheduleCreateManySubjectInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutSubjectInput | ClassScheduleUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutSubjectInput | ClassScheduleUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type ClassScheduleCreateNestedManyWithoutClassSectionInput = {
    create?: XOR<ClassScheduleCreateWithoutClassSectionInput, ClassScheduleUncheckedCreateWithoutClassSectionInput> | ClassScheduleCreateWithoutClassSectionInput[] | ClassScheduleUncheckedCreateWithoutClassSectionInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutClassSectionInput | ClassScheduleCreateOrConnectWithoutClassSectionInput[]
    createMany?: ClassScheduleCreateManyClassSectionInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type ClassScheduleUncheckedCreateNestedManyWithoutClassSectionInput = {
    create?: XOR<ClassScheduleCreateWithoutClassSectionInput, ClassScheduleUncheckedCreateWithoutClassSectionInput> | ClassScheduleCreateWithoutClassSectionInput[] | ClassScheduleUncheckedCreateWithoutClassSectionInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutClassSectionInput | ClassScheduleCreateOrConnectWithoutClassSectionInput[]
    createMany?: ClassScheduleCreateManyClassSectionInputEnvelope
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
  }

  export type ClassScheduleUpdateManyWithoutClassSectionNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutClassSectionInput, ClassScheduleUncheckedCreateWithoutClassSectionInput> | ClassScheduleCreateWithoutClassSectionInput[] | ClassScheduleUncheckedCreateWithoutClassSectionInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutClassSectionInput | ClassScheduleCreateOrConnectWithoutClassSectionInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutClassSectionInput | ClassScheduleUpsertWithWhereUniqueWithoutClassSectionInput[]
    createMany?: ClassScheduleCreateManyClassSectionInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutClassSectionInput | ClassScheduleUpdateWithWhereUniqueWithoutClassSectionInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutClassSectionInput | ClassScheduleUpdateManyWithWhereWithoutClassSectionInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type ClassScheduleUncheckedUpdateManyWithoutClassSectionNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutClassSectionInput, ClassScheduleUncheckedCreateWithoutClassSectionInput> | ClassScheduleCreateWithoutClassSectionInput[] | ClassScheduleUncheckedCreateWithoutClassSectionInput[]
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutClassSectionInput | ClassScheduleCreateOrConnectWithoutClassSectionInput[]
    upsert?: ClassScheduleUpsertWithWhereUniqueWithoutClassSectionInput | ClassScheduleUpsertWithWhereUniqueWithoutClassSectionInput[]
    createMany?: ClassScheduleCreateManyClassSectionInputEnvelope
    set?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    disconnect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    delete?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    connect?: ClassScheduleWhereUniqueInput | ClassScheduleWhereUniqueInput[]
    update?: ClassScheduleUpdateWithWhereUniqueWithoutClassSectionInput | ClassScheduleUpdateWithWhereUniqueWithoutClassSectionInput[]
    updateMany?: ClassScheduleUpdateManyWithWhereWithoutClassSectionInput | ClassScheduleUpdateManyWithWhereWithoutClassSectionInput[]
    deleteMany?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeacherSubjectsInput = {
    create?: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherSubjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    upsert?: TeacherUpsertWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubjectsInput, TeacherUpdateWithoutSubjectsInput>, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherSubjectsInput
    upsert?: SubjectUpsertWithoutTeacherSubjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeacherSubjectsInput, SubjectUpdateWithoutTeacherSubjectsInput>, SubjectUncheckedUpdateWithoutTeacherSubjectsInput>
  }

  export type TeacherCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<TeacherCreateWithoutAttendanceRecordsInput, TeacherUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAttendanceRecordsInput
    connect?: TeacherWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type TeacherUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<TeacherCreateWithoutAttendanceRecordsInput, TeacherUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: TeacherUpsertWithoutAttendanceRecordsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutAttendanceRecordsInput, TeacherUpdateWithoutAttendanceRecordsInput>, TeacherUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type ClassSectionCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ClassSectionCreateWithoutSchedulesInput, ClassSectionUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ClassSectionCreateOrConnectWithoutSchedulesInput
    connect?: ClassSectionWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<SubjectCreateWithoutSchedulesInput, SubjectUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSchedulesInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<TeacherCreateWithoutSchedulesInput, TeacherUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSchedulesInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutSubstituteClassesInput = {
    create?: XOR<TeacherCreateWithoutSubstituteClassesInput, TeacherUncheckedCreateWithoutSubstituteClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubstituteClassesInput
    connect?: TeacherWhereUniqueInput
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type ClassSectionUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ClassSectionCreateWithoutSchedulesInput, ClassSectionUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ClassSectionCreateOrConnectWithoutSchedulesInput
    upsert?: ClassSectionUpsertWithoutSchedulesInput
    connect?: ClassSectionWhereUniqueInput
    update?: XOR<XOR<ClassSectionUpdateToOneWithWhereWithoutSchedulesInput, ClassSectionUpdateWithoutSchedulesInput>, ClassSectionUncheckedUpdateWithoutSchedulesInput>
  }

  export type SubjectUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<SubjectCreateWithoutSchedulesInput, SubjectUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSchedulesInput
    upsert?: SubjectUpsertWithoutSchedulesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutSchedulesInput, SubjectUpdateWithoutSchedulesInput>, SubjectUncheckedUpdateWithoutSchedulesInput>
  }

  export type TeacherUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<TeacherCreateWithoutSchedulesInput, TeacherUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSchedulesInput
    upsert?: TeacherUpsertWithoutSchedulesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSchedulesInput, TeacherUpdateWithoutSchedulesInput>, TeacherUncheckedUpdateWithoutSchedulesInput>
  }

  export type TeacherUpdateOneWithoutSubstituteClassesNestedInput = {
    create?: XOR<TeacherCreateWithoutSubstituteClassesInput, TeacherUncheckedCreateWithoutSubstituteClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubstituteClassesInput
    upsert?: TeacherUpsertWithoutSubstituteClassesInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubstituteClassesInput, TeacherUpdateWithoutSubstituteClassesInput>, TeacherUncheckedUpdateWithoutSubstituteClassesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
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

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
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

  export type TeacherSubjectCreateWithoutTeacherInput = {
    subject: SubjectCreateNestedOneWithoutTeacherSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutTeacherInput = {
    subjectId: number
  }

  export type TeacherSubjectCreateOrConnectWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectCreateManyTeacherInputEnvelope = {
    data: TeacherSubjectCreateManyTeacherInput | TeacherSubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassScheduleCreateWithoutTeacherInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    classSection: ClassSectionCreateNestedOneWithoutSchedulesInput
    subject: SubjectCreateNestedOneWithoutSchedulesInput
    substituteTeacher?: TeacherCreateNestedOneWithoutSubstituteClassesInput
  }

  export type ClassScheduleUncheckedCreateWithoutTeacherInput = {
    id?: number
    classSectionId: number
    subjectId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type ClassScheduleCreateOrConnectWithoutTeacherInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutTeacherInput, ClassScheduleUncheckedCreateWithoutTeacherInput>
  }

  export type ClassScheduleCreateManyTeacherInputEnvelope = {
    data: ClassScheduleCreateManyTeacherInput | ClassScheduleCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassScheduleCreateWithoutSubstituteTeacherInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    classSection: ClassSectionCreateNestedOneWithoutSchedulesInput
    subject: SubjectCreateNestedOneWithoutSchedulesInput
    teacher: TeacherCreateNestedOneWithoutSchedulesInput
  }

  export type ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput = {
    id?: number
    classSectionId: number
    subjectId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
  }

  export type ClassScheduleCreateOrConnectWithoutSubstituteTeacherInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutSubstituteTeacherInput, ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput>
  }

  export type ClassScheduleCreateManySubstituteTeacherInputEnvelope = {
    data: ClassScheduleCreateManySubstituteTeacherInput | ClassScheduleCreateManySubstituteTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherAttendanceCreateWithoutTeacherInput = {
    date: Date | string
    status: $Enums.AttendanceStatus
  }

  export type TeacherAttendanceUncheckedCreateWithoutTeacherInput = {
    id?: number
    date: Date | string
    status: $Enums.AttendanceStatus
  }

  export type TeacherAttendanceCreateOrConnectWithoutTeacherInput = {
    where: TeacherAttendanceWhereUniqueInput
    create: XOR<TeacherAttendanceCreateWithoutTeacherInput, TeacherAttendanceUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherAttendanceCreateManyTeacherInputEnvelope = {
    data: TeacherAttendanceCreateManyTeacherInput | TeacherAttendanceCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherSubjectScalarWhereInput = {
    AND?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    OR?: TeacherSubjectScalarWhereInput[]
    NOT?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
  }

  export type ClassScheduleUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassScheduleWhereUniqueInput
    update: XOR<ClassScheduleUpdateWithoutTeacherInput, ClassScheduleUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassScheduleCreateWithoutTeacherInput, ClassScheduleUncheckedCreateWithoutTeacherInput>
  }

  export type ClassScheduleUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassScheduleWhereUniqueInput
    data: XOR<ClassScheduleUpdateWithoutTeacherInput, ClassScheduleUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassScheduleUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassScheduleScalarWhereInput
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassScheduleScalarWhereInput = {
    AND?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
    OR?: ClassScheduleScalarWhereInput[]
    NOT?: ClassScheduleScalarWhereInput | ClassScheduleScalarWhereInput[]
    id?: IntFilter<"ClassSchedule"> | number
    classSectionId?: IntFilter<"ClassSchedule"> | number
    subjectId?: IntFilter<"ClassSchedule"> | number
    teacherId?: IntFilter<"ClassSchedule"> | number
    date?: DateTimeFilter<"ClassSchedule"> | Date | string
    startTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    endTime?: DateTimeFilter<"ClassSchedule"> | Date | string
    status?: EnumScheduleStatusFilter<"ClassSchedule"> | $Enums.ScheduleStatus
    substituteTeacherId?: IntNullableFilter<"ClassSchedule"> | number | null
  }

  export type ClassScheduleUpsertWithWhereUniqueWithoutSubstituteTeacherInput = {
    where: ClassScheduleWhereUniqueInput
    update: XOR<ClassScheduleUpdateWithoutSubstituteTeacherInput, ClassScheduleUncheckedUpdateWithoutSubstituteTeacherInput>
    create: XOR<ClassScheduleCreateWithoutSubstituteTeacherInput, ClassScheduleUncheckedCreateWithoutSubstituteTeacherInput>
  }

  export type ClassScheduleUpdateWithWhereUniqueWithoutSubstituteTeacherInput = {
    where: ClassScheduleWhereUniqueInput
    data: XOR<ClassScheduleUpdateWithoutSubstituteTeacherInput, ClassScheduleUncheckedUpdateWithoutSubstituteTeacherInput>
  }

  export type ClassScheduleUpdateManyWithWhereWithoutSubstituteTeacherInput = {
    where: ClassScheduleScalarWhereInput
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyWithoutSubstituteTeacherInput>
  }

  export type TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherAttendanceWhereUniqueInput
    update: XOR<TeacherAttendanceUpdateWithoutTeacherInput, TeacherAttendanceUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherAttendanceCreateWithoutTeacherInput, TeacherAttendanceUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherAttendanceWhereUniqueInput
    data: XOR<TeacherAttendanceUpdateWithoutTeacherInput, TeacherAttendanceUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherAttendanceScalarWhereInput
    data: XOR<TeacherAttendanceUpdateManyMutationInput, TeacherAttendanceUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherAttendanceScalarWhereInput = {
    AND?: TeacherAttendanceScalarWhereInput | TeacherAttendanceScalarWhereInput[]
    OR?: TeacherAttendanceScalarWhereInput[]
    NOT?: TeacherAttendanceScalarWhereInput | TeacherAttendanceScalarWhereInput[]
    id?: IntFilter<"TeacherAttendance"> | number
    teacherId?: IntFilter<"TeacherAttendance"> | number
    date?: DateTimeFilter<"TeacherAttendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"TeacherAttendance"> | $Enums.AttendanceStatus
  }

  export type TeacherSubjectCreateWithoutSubjectInput = {
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutSubjectInput = {
    teacherId: number
  }

  export type TeacherSubjectCreateOrConnectWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectCreateManySubjectInputEnvelope = {
    data: TeacherSubjectCreateManySubjectInput | TeacherSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ClassScheduleCreateWithoutSubjectInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    classSection: ClassSectionCreateNestedOneWithoutSchedulesInput
    teacher: TeacherCreateNestedOneWithoutSchedulesInput
    substituteTeacher?: TeacherCreateNestedOneWithoutSubstituteClassesInput
  }

  export type ClassScheduleUncheckedCreateWithoutSubjectInput = {
    id?: number
    classSectionId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type ClassScheduleCreateOrConnectWithoutSubjectInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutSubjectInput, ClassScheduleUncheckedCreateWithoutSubjectInput>
  }

  export type ClassScheduleCreateManySubjectInputEnvelope = {
    data: ClassScheduleCreateManySubjectInput | ClassScheduleCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ClassScheduleUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ClassScheduleWhereUniqueInput
    update: XOR<ClassScheduleUpdateWithoutSubjectInput, ClassScheduleUncheckedUpdateWithoutSubjectInput>
    create: XOR<ClassScheduleCreateWithoutSubjectInput, ClassScheduleUncheckedCreateWithoutSubjectInput>
  }

  export type ClassScheduleUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ClassScheduleWhereUniqueInput
    data: XOR<ClassScheduleUpdateWithoutSubjectInput, ClassScheduleUncheckedUpdateWithoutSubjectInput>
  }

  export type ClassScheduleUpdateManyWithWhereWithoutSubjectInput = {
    where: ClassScheduleScalarWhereInput
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ClassScheduleCreateWithoutClassSectionInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    subject: SubjectCreateNestedOneWithoutSchedulesInput
    teacher: TeacherCreateNestedOneWithoutSchedulesInput
    substituteTeacher?: TeacherCreateNestedOneWithoutSubstituteClassesInput
  }

  export type ClassScheduleUncheckedCreateWithoutClassSectionInput = {
    id?: number
    subjectId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type ClassScheduleCreateOrConnectWithoutClassSectionInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutClassSectionInput, ClassScheduleUncheckedCreateWithoutClassSectionInput>
  }

  export type ClassScheduleCreateManyClassSectionInputEnvelope = {
    data: ClassScheduleCreateManyClassSectionInput | ClassScheduleCreateManyClassSectionInput[]
    skipDuplicates?: boolean
  }

  export type ClassScheduleUpsertWithWhereUniqueWithoutClassSectionInput = {
    where: ClassScheduleWhereUniqueInput
    update: XOR<ClassScheduleUpdateWithoutClassSectionInput, ClassScheduleUncheckedUpdateWithoutClassSectionInput>
    create: XOR<ClassScheduleCreateWithoutClassSectionInput, ClassScheduleUncheckedCreateWithoutClassSectionInput>
  }

  export type ClassScheduleUpdateWithWhereUniqueWithoutClassSectionInput = {
    where: ClassScheduleWhereUniqueInput
    data: XOR<ClassScheduleUpdateWithoutClassSectionInput, ClassScheduleUncheckedUpdateWithoutClassSectionInput>
  }

  export type ClassScheduleUpdateManyWithWhereWithoutClassSectionInput = {
    where: ClassScheduleScalarWhereInput
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyWithoutClassSectionInput>
  }

  export type TeacherCreateWithoutSubjectsInput = {
    name: string
    email: string
    createdAt?: Date | string
    schedules?: ClassScheduleCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleCreateNestedManyWithoutSubstituteTeacherInput
    attendanceRecords?: TeacherAttendanceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    schedules?: ClassScheduleUncheckedCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleUncheckedCreateNestedManyWithoutSubstituteTeacherInput
    attendanceRecords?: TeacherAttendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSubjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutTeacherSubjectsInput = {
    name: string
    schedules?: ClassScheduleCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherSubjectsInput = {
    id?: number
    name: string
    schedules?: ClassScheduleUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherSubjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
  }

  export type TeacherUpsertWithoutSubjectsInput = {
    update: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ClassScheduleUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUpdateManyWithoutSubstituteTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ClassScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUncheckedUpdateManyWithoutSubstituteTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type SubjectUpsertWithoutTeacherSubjectsInput = {
    update: XOR<SubjectUpdateWithoutTeacherSubjectsInput, SubjectUncheckedUpdateWithoutTeacherSubjectsInput>
    create: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeacherSubjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeacherSubjectsInput, SubjectUncheckedUpdateWithoutTeacherSubjectsInput>
  }

  export type SubjectUpdateWithoutTeacherSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    schedules?: ClassScheduleUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    schedules?: ClassScheduleUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherCreateWithoutAttendanceRecordsInput = {
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    schedules?: ClassScheduleCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleCreateNestedManyWithoutSubstituteTeacherInput
  }

  export type TeacherUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    schedules?: ClassScheduleUncheckedCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleUncheckedCreateNestedManyWithoutSubstituteTeacherInput
  }

  export type TeacherCreateOrConnectWithoutAttendanceRecordsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutAttendanceRecordsInput, TeacherUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type TeacherUpsertWithoutAttendanceRecordsInput = {
    update: XOR<TeacherUpdateWithoutAttendanceRecordsInput, TeacherUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<TeacherCreateWithoutAttendanceRecordsInput, TeacherUncheckedCreateWithoutAttendanceRecordsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutAttendanceRecordsInput, TeacherUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type TeacherUpdateWithoutAttendanceRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    schedules?: ClassScheduleUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUpdateManyWithoutSubstituteTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    schedules?: ClassScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUncheckedUpdateManyWithoutSubstituteTeacherNestedInput
  }

  export type ClassSectionCreateWithoutSchedulesInput = {
    className: string
    section: string
  }

  export type ClassSectionUncheckedCreateWithoutSchedulesInput = {
    id?: number
    className: string
    section: string
  }

  export type ClassSectionCreateOrConnectWithoutSchedulesInput = {
    where: ClassSectionWhereUniqueInput
    create: XOR<ClassSectionCreateWithoutSchedulesInput, ClassSectionUncheckedCreateWithoutSchedulesInput>
  }

  export type SubjectCreateWithoutSchedulesInput = {
    name: string
    teacherSubjects?: TeacherSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    teacherSubjects?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutSchedulesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutSchedulesInput, SubjectUncheckedCreateWithoutSchedulesInput>
  }

  export type TeacherCreateWithoutSchedulesInput = {
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleCreateNestedManyWithoutSubstituteTeacherInput
    attendanceRecords?: TeacherAttendanceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    substituteClasses?: ClassScheduleUncheckedCreateNestedManyWithoutSubstituteTeacherInput
    attendanceRecords?: TeacherAttendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSchedulesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSchedulesInput, TeacherUncheckedCreateWithoutSchedulesInput>
  }

  export type TeacherCreateWithoutSubstituteClassesInput = {
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    schedules?: ClassScheduleCreateNestedManyWithoutTeacherInput
    attendanceRecords?: TeacherAttendanceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubstituteClassesInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    schedules?: ClassScheduleUncheckedCreateNestedManyWithoutTeacherInput
    attendanceRecords?: TeacherAttendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSubstituteClassesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubstituteClassesInput, TeacherUncheckedCreateWithoutSubstituteClassesInput>
  }

  export type ClassSectionUpsertWithoutSchedulesInput = {
    update: XOR<ClassSectionUpdateWithoutSchedulesInput, ClassSectionUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ClassSectionCreateWithoutSchedulesInput, ClassSectionUncheckedCreateWithoutSchedulesInput>
    where?: ClassSectionWhereInput
  }

  export type ClassSectionUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ClassSectionWhereInput
    data: XOR<ClassSectionUpdateWithoutSchedulesInput, ClassSectionUncheckedUpdateWithoutSchedulesInput>
  }

  export type ClassSectionUpdateWithoutSchedulesInput = {
    className?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSectionUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUpsertWithoutSchedulesInput = {
    update: XOR<SubjectUpdateWithoutSchedulesInput, SubjectUncheckedUpdateWithoutSchedulesInput>
    create: XOR<SubjectCreateWithoutSchedulesInput, SubjectUncheckedCreateWithoutSchedulesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutSchedulesInput, SubjectUncheckedUpdateWithoutSchedulesInput>
  }

  export type SubjectUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacherSubjects?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherSubjects?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherUpsertWithoutSchedulesInput = {
    update: XOR<TeacherUpdateWithoutSchedulesInput, TeacherUncheckedUpdateWithoutSchedulesInput>
    create: XOR<TeacherCreateWithoutSchedulesInput, TeacherUncheckedCreateWithoutSchedulesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSchedulesInput, TeacherUncheckedUpdateWithoutSchedulesInput>
  }

  export type TeacherUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUpdateManyWithoutSubstituteTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    substituteClasses?: ClassScheduleUncheckedUpdateManyWithoutSubstituteTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUpsertWithoutSubstituteClassesInput = {
    update: XOR<TeacherUpdateWithoutSubstituteClassesInput, TeacherUncheckedUpdateWithoutSubstituteClassesInput>
    create: XOR<TeacherCreateWithoutSubstituteClassesInput, TeacherUncheckedCreateWithoutSubstituteClassesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubstituteClassesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubstituteClassesInput, TeacherUncheckedUpdateWithoutSubstituteClassesInput>
  }

  export type TeacherUpdateWithoutSubstituteClassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    schedules?: ClassScheduleUpdateManyWithoutTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSubstituteClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    schedules?: ClassScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    attendanceRecords?: TeacherAttendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherSubjectCreateManyTeacherInput = {
    subjectId: number
  }

  export type ClassScheduleCreateManyTeacherInput = {
    id?: number
    classSectionId: number
    subjectId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type ClassScheduleCreateManySubstituteTeacherInput = {
    id?: number
    classSectionId: number
    subjectId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
  }

  export type TeacherAttendanceCreateManyTeacherInput = {
    id?: number
    date: Date | string
    status: $Enums.AttendanceStatus
  }

  export type TeacherSubjectUpdateWithoutTeacherInput = {
    subject?: SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutTeacherInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassScheduleUpdateWithoutTeacherInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    classSection?: ClassSectionUpdateOneRequiredWithoutSchedulesNestedInput
    subject?: SubjectUpdateOneRequiredWithoutSchedulesNestedInput
    substituteTeacher?: TeacherUpdateOneWithoutSubstituteClassesNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassScheduleUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassScheduleUpdateWithoutSubstituteTeacherInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    classSection?: ClassSectionUpdateOneRequiredWithoutSchedulesNestedInput
    subject?: SubjectUpdateOneRequiredWithoutSchedulesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutSubstituteTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type ClassScheduleUncheckedUpdateManyWithoutSubstituteTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type TeacherAttendanceUpdateWithoutTeacherInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type TeacherAttendanceUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type TeacherAttendanceUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type TeacherSubjectCreateManySubjectInput = {
    teacherId: number
  }

  export type ClassScheduleCreateManySubjectInput = {
    id?: number
    classSectionId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type TeacherSubjectUpdateWithoutSubjectInput = {
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutSubjectInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassScheduleUpdateWithoutSubjectInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    classSection?: ClassSectionUpdateOneRequiredWithoutSchedulesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutSchedulesNestedInput
    substituteTeacher?: TeacherUpdateOneWithoutSubstituteClassesNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassScheduleUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassScheduleCreateManyClassSectionInput = {
    id?: number
    subjectId: number
    teacherId: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ScheduleStatus
    substituteTeacherId?: number | null
  }

  export type ClassScheduleUpdateWithoutClassSectionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    subject?: SubjectUpdateOneRequiredWithoutSchedulesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutSchedulesNestedInput
    substituteTeacher?: TeacherUpdateOneWithoutSubstituteClassesNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutClassSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassScheduleUncheckedUpdateManyWithoutClassSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    substituteTeacherId?: NullableIntFieldUpdateOperationsInput | number | null
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