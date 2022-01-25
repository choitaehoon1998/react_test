// import React,{useCallback, useState} from "react";
// import "./compostyle.css";

// export const Tags = () => {
//     const [tag, setTag] = useState<string | ''>('')
//     const [tagArr, setTagArr] = useState<string[0] | []>([])

//     const onKeyup = useCallback(
//         (e) =>{
//             if(process.brower){
//                 const $HashWrapOuter = document.querySelector('.HashWrapOuter')
//                 const $HashWrapInner = document.createElement('div')
//                 $HashWrapInner.className = 'HashWrapInner'

//                 $HashWrapInner.addEventListener('click', ()=>{
//                     $HashWrapOuter?.removeChild($HashWrapInner)
//                     console.log($HashWrapInner.innerHTML)
//                     setTagArr(tagArr.filter((tag) => tag))
//                 })

//                 if (e.keyCode === 13 && e.target.value.trim() !== ''){
//                     console.log('Enter Key 입력됨', e.target.value)
//                     $HashWrapInner.innerHTML = '#' + e.target.value
//                     $HashWrapOuter?.appendChild($HashWrapInner)
//                     setTagArr((tagArr) => [...tagArr, tagArr])
//                     setTag('')
//                 }
//             }
//         },
//         [tag, tagArr]
//     )
//     return(
//         <div className="hashDivrap">
//         <div className="tagWrap" >
//             <div className="HashWrapOuter"></div>
//                 <input
//                 className="HashInput"
//                 type="text"
//                 value={hashtag}
//                 onchange={onChangeHashtag}
//                 onKeyUp={onKeyup}
//                 placeholder="입력"
//                 />
//             </div>
//         </div>
//     );
// }