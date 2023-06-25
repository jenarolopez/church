import React from "react";
import { members } from "../../Interface";
import { ITable, IMember } from "../../Interface";
import { TableItem, TableDiv } from "../../components/Table";

const Members = () => {
  return (
    <div>
      <TableDiv>
        {members.map((data: IMember) => {
          return (
            <TableItem>
              <div>{data.firstName}</div>
            </TableItem>
          );
        })}
      </TableDiv>
    </div>
  );
};

export default Members;
