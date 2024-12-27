import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Keep this if you need `.env` configurations; otherwise, remove it.
    }),
    ContactsModule, // Your new module for the single endpoint
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
