import React, { createContext, useContext, useEffect, useReducer } from 'react';
import ListContainer from './view';
import axios from 'axios';
import { BASE_URL } from '../../../constant/constants';
import list from '../../../context/reducers/list';
import listStates from '../../../context/initialStates/listStates';
import { monthNames } from '../../../constant/constants';
import { GlobalContext } from '../../../context/Provider';
export const ListContext = createContext()

function List() {
    const [listState, listDispatch] = useReducer(list, listStates)

    const { authState: { token }, authDispatch } = useContext(GlobalContext)
    axios.defaults.headers.common['Authorization'] = "Bearer " + token.access

    useEffect(() => {
        listDispatch({ type: "LOADING" })
        axios.get(`${BASE_URL}/api/peserta/`)
            .then(res => {
                listDispatch({ type: "LISTS", payload: res.data })
            }).catch(err => {
                console.log(err)
                localStorage.removeItem("token")
                authDispatch({ type: "LOGOUT" })

            })
    }, [listState.refetch])



    const onModalAddSubmit = (data) => {
        axios.post(`${BASE_URL}/api/peserta/`, {
            ...data
        })
            .then(res => {
                listDispatch({ type: "REFETCH" })
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const onModalUpdateSubmit = (data) => {
        let isSame = compareObject(listState.listDetail, data)
        if (!isSame) {
            axios.put(`${BASE_URL}/api/peserta/${data.id}/`, {
                ...data
            })
                .then(res => {
                    listDispatch({ type: "UPDATE", payload: res.data })
                }).catch(err => {
                    console.log(err)
                })
        } else {
            console.log("data is not updated due to the same value from the previous one")
        }
    }


    const onModalUploadSubmit = (data) => {
        console.log(data.file[0])
        let formData = new FormData();
        formData.append("file", data.file[0])
        axios.post(`${BASE_URL}/api/file/`, formData)
            .then(res => {
                listDispatch({ type: "REFETCH" })
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const onDeletePeserta = (id) => {
        if (window.confirm(`Anda yakin ingin menghapus ${listState.listDetail.nama}`)) {
            console.log("dihapus")
            axios.delete(`${BASE_URL}/api/peserta/${id}`)
                .then(res => {
                    listDispatch({ type: "DELETE" })
                    console.log(res.data, "is deleted")
                })
        } else {
            console.log("tidak jadi dihapus")
        }
    }

    const onDownloadExcel = () => {
        axios({
            url: `${BASE_URL}/api/file/`,
            method: 'GET',
            responseType: 'blob'
        })
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'peserta.xlsx'); //or any other extension
                document.body.appendChild(link);
                link.click();
            }).catch(err => {
                console.log(err)
            })
    }

    const onDownloadSertifikat = (data) => {

        let today = new Date();
        let date = today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
        let mulaiDate = String(data.mulai).split("-")
        let akhirDate = String(data.akhir).split("-")
        let newData = {
            ...data,
            ttgl: data.tempat + ', ' + date,
            mulai: `${mulaiDate[2]} ${monthNames[parseInt(mulaiDate[1]) - 1]}`,
            akhir: `${akhirDate[2]} ${monthNames[parseInt(akhirDate[1]) - 1]} ${akhirDate[0]}`

        }
        delete newData.id
        delete newData.status
        delete newData.tempat

        axios({
            url: `${BASE_URL}/api/sertifikat/`,
            method: 'POST',
            responseType: 'blob',
            data: {
                ...newData
            }
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'sertifikat.png'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }).catch(err => {
            console.log(err)
        })
    }

    const onCreateParticipantAcccount = (data, addData) => {
        let newData = {
            start_at: addData.start_at,
            finish_at: addData.finish_at,
            user: {
                ...data,
                first_name: addData.first_name,
                last_name: addData.last_name,
                is_admin: false,
                is_participant: true,
                is_staff: false
            }
        }
        console.log(newData)
        axios.post(`${BASE_URL}/api/absence/`, newData)
            .then(res => {
                listDispatch({ type: "REFETCH" })
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <ListContext.Provider
            value={{
                listState,
                listDispatch,
                onModalAddSubmit,
                onModalUpdateSubmit,
                onModalUploadSubmit,
                onDeletePeserta,
                onDownloadExcel,
                onDownloadSertifikat,
                onCreateParticipantAcccount
            }}
        >

            <ListContainer />
        </ListContext.Provider>

    )

}


const compareObject = (obj1, obj2) => {
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;

}
export default List;
