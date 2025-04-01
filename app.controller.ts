import { Controller, Get, Query } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  getForm(): string {
    return `
      <form method="GET" action="/greet">
          <input type="text" name="meno" placeholder="First name" />
          <button type="submit">ENTER</button>
      </form>
    `;
  }

  @Get('/greet')
  greet(@Query('meno') meno: string): string {
    return `<p>Ahoj ${meno}!</p>`;
  }
}

@Module({
  controllers: [AppController],
})
export class AppModule {}

