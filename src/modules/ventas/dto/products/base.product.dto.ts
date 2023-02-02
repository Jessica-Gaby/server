import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator/types/decorator/decorators";
import { IsNotEmptyValidationOptions, IsStringValidationOptions} from "shared/validation";

export class BaseProductDTO{
    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString (IsStringValidationOptions)
    readonly title;

    
}