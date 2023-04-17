// serialize interceptor

import {
  ExecutionContext,
  NestInterceptor,
  CallHandler,
  UseInterceptors,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { plainToInstance } from 'class-transformer';

// refactored from src/users/users.controller.ts to make it global
export function Serialize(dto: any) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled by the request handler
    console.log('I am running before the handler', context);

    // Run something after the response is sent out
    return handler.handle().pipe(
      map((data: any) => {
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true, //this is for hide other properties which are not exposed in the dto
        });
      }),
    );
  }
}
