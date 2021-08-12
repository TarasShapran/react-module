import Comment from "../comment/Comment";

export default function Comments({item}) {



  return (
    <div>
      {
        item.map((value)=><Comment key={value.id} comment={value}/> )
      }

    </div>
  );
}