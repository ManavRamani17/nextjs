
export const data = [
            {id:1, Name:"Manav",RollNo:579},
            {id:2, Name:"Jenil",RollNo:493},
            {id:3, Name:"Meet",RollNo:482},
            {id:4, Name:"Darpan",RollNo:489},
            {id:5, Name:"Anirudhh",RollNo:485},
            {id:6, Name:"Rohan",RollNo:201}
        ]
export async function GET(request:Request,{params}:{params:Promise<{id:string}>}){
     const  {id} = await params;

    const ans = {
        name:"This is student data",
        data:data.filter((stu)=>stu.id==Number(id))
    }
    return new Response(JSON.stringify(ans))
}