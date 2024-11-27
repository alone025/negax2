
import LikesItem from '../components/LikesItem'


const Likes = ({data, hnd}) => {
 
// const datas=[
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
//     {
//         name: 1
//     },
// ]



    return (
        <div>
                <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5'>
                   {
                    data.map((data,index)=>(
                        <LikesItem hnd={hnd} dataC={data} key={index}/>
                    ))
                   }
                </div>
        </div>
  )
}

export default Likes