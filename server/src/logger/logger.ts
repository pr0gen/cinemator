import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class CinematorLogger extends Logger {

    error(message: string, trace: string) {
        super.error(message, trace);
    }
}
