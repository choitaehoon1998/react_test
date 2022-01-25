import React,{useEffect} from "react";
import "./compostyle.css";

const Tags = () => {
    document.addEventListener("DOMContentLoaded",function () {
        var tag = {};
        var counter = 0;

        function addTag (value){
            tag[counter] = value;
            counter++;
        }

        function marginTag () {
            return Object.values(tag).filter(function (word){
                return word !== "";
            });
        }

        ("#tag-form").on("submit", function (e){
            let value = marginTag();
            ("#rdTag").val(value);

            (this).submit();
            
        });

        ("#tag").on("keypress",function (e){
            var self = (this);

            if(e.key === "Enter" || e.keyCode == 32){

                var tagValue = self.val();
                console.log(tagValue);
                debugger
                if(tagValue !== ""){

                    var result = Object.values(tag).filter(function (word){
                        return word === tagValue;
                    })
                    if(result.length == 0 ){
                        ("#tag-list").append("<li class='tag-item'>"+tagValue+"<span class='del-btn' idx='"+counter+"'>x</span></li>");
                        addTag(tagValue);
                        self.val("");
                    }else{
                    }
                }
                e.preventDefault();
                
            }
        });
        (document).on("click", ".del-btn", function(e){
            var index = (this).attr("idx");
            tag[index]="";
            (this).parent().remove();
        });
        
    })
    return(
        <>
        <div>
            <input type="hidden" value="" name="tag" id="rdTag" />
        </div>
        
        <ul id="tag-list"></ul>

        <div>
            <input type="text" id="tag" />
        </div>
        </>
    );
}
export default Tags;