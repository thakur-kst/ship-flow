import { Injectable, NotFoundException } from '@nestjs/common';
import { Tenant } from './interfaces/tenant.interface.js';
import { CreateTenantDto } from './dto/create-tenant.dto.js';

@Injectable()
export class TenantsService {

  private readonly tenants: Tenant[] = [];

  findAll(): Tenant[] {
    return this.tenants;
  }

  findOne(id: string): Tenant {
    const tenant = this.tenants.find(tenant => tenant.id === id);
    if (!tenant) {
      throw new NotFoundException(
        `Tenant with ID ${id} not found`,
      );
    }
    return tenant;
  }

  create(dto: CreateTenantDto): Tenant {
    const tenant: Tenant = {
      id: `tenant_${Date.now()}`,
      name: dto.name,
      code: dto.code,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.tenants.push(tenant);

    return tenant;
  }

}
