import { Body, Controller, Get, Post , Param} from '@nestjs/common';
import { TenantsService } from './tenants.service.js';
import { CreateTenantDto } from './dto/create-tenant.dto.js';

@Controller({
    path: 'tenants',
    version: '1',
})
export class TenantsController {
    constructor(private readonly tenantsService: TenantsService) {
    }

    @Get()
    findAll() {
        return this.tenantsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tenantsService.findOne(id);
    }

    @Post()
    createTenant(@Body() dto: CreateTenantDto) {
        return this.tenantsService.create(dto);
    }
}
