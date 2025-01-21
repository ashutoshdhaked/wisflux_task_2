const Modal = ({showModal , setShowModal , children})=>{
    return(
         <>  
           {showModal ? (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 h-full">
              <div className="bg-white rounded-lg shadow-lg w-2/3 max-w-md p-2 overflow-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-end items-center">
                    <button
                      className="block bg-slate-700 text-white hover:bg-slate-800 px-2 py-1 rounded"
                      onClick={() => { setShowModal(false); }}
                    >
                      Close
                    </button>
                  </div>
                  <hr></hr>
                  <div className="h-72 overflow-auto w-full">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
         </>   
    )
}
export default Modal;