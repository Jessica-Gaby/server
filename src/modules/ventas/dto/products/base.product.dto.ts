import { IsNotEmpty } from "class-validator";
import { IsNumber, IsNumberString, IsPositive, IsString } from "class-validator/types/decorator/decorators";
import { IsNotEmptyValidationOptions, IsStringValidationOptions, IsNumberValidationOptions,IsPositiveValidationOptions} from "shared/validation";

export class BaseProductDTO{
    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString (IsStringValidationOptions())
    readonly title:string;

    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsNumber(IsNumberValidationOptions())
    @IsPositive(IsPositiveValidationOptions())
    readonly price:number;

    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString (IsStringValidationOptions())
    readonly descripcion:string;

}