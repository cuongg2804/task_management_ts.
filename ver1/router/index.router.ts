import taskRouter from "./task.router";
import userRouter from "./user.router";

const routerV1= (app): void=>{
    const version = "/v1/api";

    app.use(version + "/tasks",taskRouter);

    app.use(version + "/user",userRouter);
    
}
export default routerV1;