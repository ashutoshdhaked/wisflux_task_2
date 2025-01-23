const ShowUserDetail = ({viewUser}) => {
  return (
    <>
      <section  className="flex-col justify-center items-center">
        <div className="flex justify-evenly items-center">
           <div>
           <figure class="max-w-lg">
          <img
            class="h-auto max-w-full rounded-lg"
            src={viewUser.image}
            alt="image description"
          />
        </figure>
           </div>
           <div>
              <p className="text-3xl text-blue-950">{viewUser.name}</p>
              <p className="text-xl text-blue-600 px-4">{viewUser.email}</p>
           </div>
        </div>
        <div className="mt-6">
          <p>Branch : {viewUser.branch} </p>
          <p>Semester : {viewUser.semester}</p>
          <p>Date Of Birth : {viewUser.dob} </p>
        </div>
      </section>
    </>
  );
};

export default ShowUserDetail;
