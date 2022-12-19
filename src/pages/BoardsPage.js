import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import { TaskCard } from "../components/TaskCard/TaskCard";

function BoardsPage() {
  const stateData = useSelector((state) => state.boards?.board?.board);
  const [board, setBoard] = useState({});

  useEffect(() => {
    if (stateData) {
      setBoard(stateData);
    } else {
      setBoard({});
    }
  }, [stateData]);

  const getTaskCounts = (status) => {
    let count = 0;
    for (let i = 0; i < board?.tasks?.length; i++) {
      if (board.tasks[i].status === status) {
        count++;
      }
    }
    return count;
  };

  const getTasksPerStatus = (status) => {
    let tasks = board?.tasks?.filter((t) => t.status === status);
    return tasks;
  };

  return (
    <Layout>
      <div className="w-5/6 pl-16 pt-6">
        <div className="flex w-full gap-6">
          <div className="w-1/3">
            <div className="flex items-center gap-3">
              <div className="rounded-full h-4 w-4 bg-[#49c4e5]"></div>
              <h2 className="text-[#828fa3] text-[.75rem] font-[700] pt-1.5">
                TODO ( {getTaskCounts("TODO")} )
              </h2>
            </div>
            {getTasksPerStatus("TODO")?.length > 0 ? (
              getTasksPerStatus("TODO").map((t, index) => (
                <div key={index + "todo"} className="w-full mt-4">
                  <TaskCard task={t} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="w-1/3">
            <div className="flex items-center gap-3">
              <div className="rounded-full h-4 w-4 bg-[#8471f2]"></div>
              <h2 className="text-[#828fa3] text-[.75rem] font-[700] pt-1.5">
                DOING ( {getTaskCounts("DOING")} )
              </h2>
            </div>
            {getTasksPerStatus("DOING")?.length > 0 ? (
              getTasksPerStatus("DOING").map((t, index) => (
                <div key={index + "doing"} className="w-full mt-4">
                  <TaskCard task={t} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="w-1/3">
            <div className="flex items-center gap-3">
              <div className="rounded-full h-4 w-4 bg-[#67e2ae]"></div>
              <h2 className="text-[#828fa3] text-[.75rem] font-[700] pt-1.5">
                DONE ( {getTaskCounts("DONE")} )
              </h2>
            </div>
            {getTasksPerStatus("DONE")?.length > 0 ? (
              getTasksPerStatus("DONE").map((t, index) => (
                <div key={index + "done"} className="w-full mt-4">
                  <TaskCard task={t} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BoardsPage;
