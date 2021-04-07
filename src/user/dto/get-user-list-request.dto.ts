import { ApiProperty } from "@nestjs/swagger";

import { IsBoolean, IsIn, IsInt, Min } from "class-validator";

export class GetUserListRequestDto {
  @ApiProperty({ enum: ["acceptedProblemCount", "rating"] })
  @IsIn(["acceptedProblemCount", "rating"])
  sortBy: "acceptedProblemCount" | "rating";

  @ApiProperty()
  @IsBoolean()
  hasContestUser: boolean;

  @ApiProperty()
  @IsInt()
  @Min(0)
  skipCount: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  takeCount: number;
}
