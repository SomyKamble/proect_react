import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import * as XLSX from 'xlsx';
import { useEffect, useState } from "react";
import ListItem from "./listItem"

import newListItem from "../Table/Table"

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  marginTop: 20,
  marginBottom:20,  
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles

  } = useDropzone({accept: 'xlsx/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);
  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));
  const [items, setItems] = useState([])
  const readExcel=(file)=>{

    const promise=new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload=(e)=>{
        const bufferArray=e.target.result;
        const wb=XLSX.read(bufferArray,{type:'buffer'});
        const wsname=wb.SheetNames[0];
        const ws=wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);

      } ;
      fileReader.onerror=(error)=>{
        reject(error);
      };

    });

    promise.then((d)=>{
      console.log(d);
       setItems(d);
    });

  }
  
  

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} type="file" onChange={(e)=>{
        const file = e.target.files[0]
        
        readExcel(file);}} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <p><a
                href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{ color: "green" }}
              >
                Click here to download Sample file
              </a></p>
      </div>
      <aside>
        
        <table>
          <tbody >
            {items.map((d)=>
              <tr key={d.index}>
                <th value={d.symbol}>{d.symbol}</th>
                <td>{d.index}</td>
              </tr>
            )}
          </tbody>
        </table>
        
        <ul>{files}</ul>
        <ul>{files.data}</ul>
        
        
        {items.map((d,index)=>
        
          <ListItem type="hidden" delta={d.symbol} />
          
        )}
        
        
      </aside>
      
    </div>
    
  );
}

export default StyledDropzone;