import { Module } from '@nestjs/common';
import { CinematorLogger } from './logger';

@Module({
    providers: [CinematorLogger],
    exports: [CinematorLogger]
})
export class LoggerModule { }
