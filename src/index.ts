import * as runner from "ts-node";

// IF DOWNGRADE TO 3.3.1, NO ERROR OCCURS

async function main(): Promise<void> {
    runner.register({
        emit: false,
        compiler: "ttypescript",
        compilerOptions: {
            "target": "es2016",
            "module": "commonjs",
            "plugins": [
                { "transform": "typescript-transform-paths" }
            ]
        }
    });

    const file: string = "../others/src/controller.ts";
    const mod = await import(file);
    console.log(new mod.SomeClass().print("something", { id: "Special" }));
}
main().catch(exp => {
    console.log(exp);
    process.exit(-1);
})