import { arrayBuffer } from "stream/consumers";

export default function DataHeader({num} : {num:number[]}){


    const listItems = num.map(i =>
        <li key={i}>{i}</li>
      );

      return <ul>{listItems}</ul>;
}