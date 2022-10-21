import { Body, Controller, Get, Param } from "@nestjs/common";
import { capsule } from "./capsule";
import { SomeDTO } from "./dto";

@Controller()
export class SomeClass {
    @Get(":section")
    public print(
        @Param("section") section: string,
        @Body() input: SomeDTO
    ) {
        return capsule({
            a: "a",
            b: "b",
            input,
            section,
        });
    }
}