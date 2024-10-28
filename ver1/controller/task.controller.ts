import Task from "../model/task.model";
import express, {Request,Response} from "express";

// [GET] /api/v1/tasks
export const index = async (req : Request, res : Response) : Promise<void> => {
   try {
    const find = {
        deleted  :false
    }
     //Lọc theo trạng thái
     if(req.query.status){
        find["status"] = `${req.query.status}`;
    }
    //Hết lọc theo trạng thái
    
     //Sắp xếp
     const sort = {};
     if(req.query.sortKey && req.query.sortValue){
         sort[`${req.query.sortKey}`]  =  `${req.query.sortValue}`;
     }
   
     //Sắp xếp


      //Phân trang
      const pagination = {
        limit: 2,
        page: 1,
        skip : 0
    }
    if(req.query.page){
        const page = parseInt(`${req.query.page}`)
        const skip = ( page - 1 ) * pagination.limit;
        pagination.skip = skip;
    }
    //Phân trang

    //Tìm kiếm
    if(req.query.keyWord){
        find["title"] = `${req.query.keyWord}`;
        console.log(req.query.keyWord);
    } 
    //Tìm kiếm

    const task = await  Task.find(find).sort(sort)
            .limit(pagination.limit)
            .skip(pagination.skip);
    res.json(task);
   } catch (error) {
        console.log(error);
        res.redirect("back");
   }
}


// [GET] /api/v1/tasks/detail/:id
export const detail = async (req : Request, res : Response) : Promise<void> => {
    const task = await Task.find({
        _id : req.params.id,
        deleted : false
    })
    res.json(task);
}

// [PATCH] /api/v1/change-status/:id
export const changeStatus = async (req : Request, res : Response) : Promise<void> => {
    
    try {
        const id:string = req.params.id;
        const status:string = req.body.status;
        console.log(status);
        await Task.updateOne({
            _id : id ,
            deleted  :"false"
        },{
            status : status
        })
        res.json({
            code : 200,
            message: "Cập nhật trạng thái thành công !"
        });
    } catch (error) {
        res.json({
            code : 400,
            message: "Không tìm thấy bản ghi !"
        });
    }
}

// [PATCH] /api/v1/change-multi
export const changeMulti = async (req : Request, res : Response) : Promise<void> => {
    try {
        const {ids, status} = req.body;
        const listStatus = ["initial","finish","pending","doing","notFinish"];
        if(listStatus.includes(status)){
            await Task.updateMany({
                _id :{$in : ids},
                deleted  :false
            },{
                status : status
            })
        }
       res.json({
           code : 200,
           message: "Cập nhật trạng thái thành công !"
       });
   } catch (error) {
       res.json({
           code : 400,
           message: "Không tìm thấy bản ghi !"
       });
   }
}


// POST /v1/api/task/create
export const createPost =  async (req : Request, res : Response) : Promise<void> => {
     const newTask = new Task(req.body);

     await newTask.save();
    res.json({
        code : 200,
        message: "Tạo mới công việc thành công!"
    })
}

// [PATCH] /v1/api/task/edit/:id
export const edit = async (req :Request , res: Response) => {
   try {
    const id: String  = req.params.id;
    await Task.updateOne({
        _id  : id
    },req.body)

    res.json({
        code : 400,
        message : "Sửa sản phẩm thành công !"
    })
   } catch (error) {
    res.json({
        code : 200,
        message : "Chỉnh sửa các sản phẩm không thành công!"
    })
   }
}

// [PATCH] /v1/api/task/edit-multi
export const editMulti = async (req : Request , res : Response) => {
    try {
         const {ids, status} = req.body;
         await Task.updateMany(
             { _id: { $in: ids } },
             { $set: {status} }
         );
 
         res.json({
             code : 400,
             message : "Chỉnh sửa các sản phẩm thành công!"
         })
    } catch (error) {
         res.json({
             code : 200,
             message : "Chỉnh sửa các sản phẩm không thành công!"
         })
    }
 }
 
// [PATCH] /v1/api/task/delete/:id
 export const deletePatch = async (req : Request , res : Response) => {
    try {
        await Task.updateOne({
            _id : req.params.id
        },{
            deleted: true,
            deletedAt: new Date()
        })
        res.json({
            code: 200,
            message: "Xóa công việc thành công!"
        })
    } catch (error) {
        res.json({
            code: 400,
            message: "Xóa công việc không thành công!"
        })
    }
}



