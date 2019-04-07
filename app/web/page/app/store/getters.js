'use strict';

import { format } from "upath";


const getters = {
    findcomics:state=> {
        return (is_finish,sortIndex,sortType)=>{
            var returnComic
                if(is_finish>=0)
                returnComic = state.comicList.filter(comics=>comics.is_finish===is_finish)
                else
                returnComic = state.comicList
            
                if(sortIndex>=0)
                    return returnComic.sort(getters.compare(sortIndex,sortType))
                else
                    return returnComic
        }

    },
    compare(sortIndex,sortType){
        if(sortType==="score")
        return (a,b)=>{
            let value1 =Number( a.order.score.split("分")[0]);
            let value2 = Number( b.order.score.split("分")[0]);
            if(sortIndex===0) return value2 - value1;
            if(sortIndex===1) return value1 - value2;
        }
        else if(sortType==="follow")
        return (a,b)=>{
            let value1 =Number( a.order.follow.split("万")[0]);
            let value2 = Number( b.order.follow.split("万")[0]);
            if(sortIndex===0) return value2 - value1;
            if(sortIndex===1) return value1 - value2;
        }
        else if(sortType==="play")
        return (a,b)=>{
            let value1 = getters.Numformat(a.order.play.split("次")[0]);
            let value2 = getters.Numformat(b.order.play.split("次")[0]);
 
            if(sortIndex===0) return value2 - value1;
            if(sortIndex===1) return value1 - value2;
        }
    },
    Numformat(value){
        if(value.endsWith("亿"))
            return Number(value.split("亿")[0])*10000;
        else
        return Number(value.split("万")[0]);
    },

};

export default getters;