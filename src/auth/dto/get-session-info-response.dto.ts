import { ApiProperty } from "@nestjs/swagger";

import { UserPrivilegeType } from "@/user/user-privilege.service";

import { PreferenceConfig } from "@/config/config.schema";

import { UserMetaDto } from "@/user/dto";

export class GetSessionInfoResponseDto {
  @ApiProperty()
  userMeta?: UserMetaDto;

  @ApiProperty({ enum: UserPrivilegeType, isArray: true })
  userPrivileges?: UserPrivilegeType[];

  // @ApiProperty()
  // userPreference?: UserPreferenceDto;

  @ApiProperty()
  serverPreference: PreferenceConfig;
}
