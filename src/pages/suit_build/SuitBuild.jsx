import { lazy, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CommonContext } from "../../contexts/CommonContexts";
import { Spinner } from "../../components/elements/Loaders";
import { useGetSuitBuildQuery } from "../../queries/getSuitBuildQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../assets/axios/useApi";
import { useCustAppntQuery } from "../../queries/AppointmentQuery";
import Header from "../../components/Header";
import { FullSVGLogo } from "../../assets/Logos";
import { getCustomerId } from "../../assets/js_utils/utils";

const SuitBuildWrapper = lazy(() => import("../../components/suit_build/SuitBuildWrapper"));
const SelectFabric = lazy(() => import("../../components/suit_build/SelectFabric"));
const Monogram = lazy(() => import("../../components/suit_build/Monogramming"));
const SelectBlazerPattern = lazy(() => import("../../components/suit_build/SelectBlazerPattern"));
const SelectWaistcoatPattern = lazy(() => import("../../components/suit_build/SelectWaistcoatPattern"));
const SelectWaistcoatLapel = lazy(() => import("../../components/suit_build/SelectWaistcoatLapel"));
const SelectPantStyle = lazy(() => import("../../components/suit_build/SelectPantStyle"));
const SelectShirtColor = lazy(() => import("../../components/suit_build/SelectShirtColor"));



export default function SuitBuild({ }) {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const http = useApi()
    const { steps, suitBuildSteps, findFirstNullSuitBuildStep, transformSuitBuildStepToObject } = useContext(CommonContext)
    const [pictures, set_pictures] = useState([])
    const [detail_id, set_detail_id] = useState(null)
    const [suit_build_params, set_suit_build_params] = useSearchParams()
    const select_stage = suit_build_params.get("select")
    const [is_loading, set_is_loading] = useState(false)
    const [monogram_text, set_monogram_text] = useState('')
    const appointment_query = useCustAppntQuery()
    const appointment = appointment_query?.data?.data || {}
    useEffect(() => {
        if (!steps.includes(select_stage)) {
            set_is_loading(false)
            navigate('?select=fabric')
        }
    }, [suitBuildSteps])

    const { data, isLoading, isError, isSuccess } = useGetSuitBuildQuery(appointment?.suit)
    const suit_data = isSuccess ? data?.data : {}
    const suitBuild_mutation = useMutation({
        mutationKey: ["suit"],
        mutationFn: (context) => {
            set_is_loading(true)
            const suit_id = context[0]
            const suit_data = context[1]
            if (suit_id) {
                return http.put("/api/suit/update/" + suit_id + "/", suit_data)
            } else {
                return http.post("api/suit/create/", suit_data)

            }
        },
        onSettled: () => set_is_loading(false),
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ["customer"] })
            navigate("?consult=date_time")

        }
    })



    const goToNext = () => {
        const current_index = steps.indexOf(select_stage)
        if (current_index !== -1) {
            if (current_index != (steps.length - 1)) {
                set_suit_build_params({ "select": (steps[current_index + 1]) })
            }
        } else {
            set_suit_build_params({ "select": "fabric" })
        }
    }

    const handleNext = () => {
        // if(!appointment || !appointment["suit"] || appointment['appnt_type'] != 'MEASUREMENT'){
        //     navigate('?consult=info')
        //     return
        // }
        const new_suit_data = transformSuitBuildStepToObject()
        const left_stage = findFirstNullSuitBuildStep()
        if (select_stage == "shirt_color") {
            if (left_stage) {
                set_suit_build_params({ "select": left_stage })
            } else {
             if (appointment?.id) {
                goToNext()
             } else {
                navigate("?consult=info")
             }
            }

        } else if (select_stage == "monogram") {
            const left_stage = findFirstNullSuitBuildStep()
            if (left_stage) {
                set_suit_build_params({ "select": left_stage })
            } else {
                new_suit_data['monogram_text'] = monogram_text
                // alert(JSON.stringify(new_suit_data))
                // alert(appointment?.id)
                if (appointment?.id) {
                    new_suit_data['appointment'] = appointment?.id
                    suitBuild_mutation.mutate([appointment?.suit, new_suit_data])
                } else {
                    navigate("?consult=info")
                }
            }
        } else {
            goToNext()
        }

    }



    const handlePrev = () => {
        const current_index = steps.indexOf(select_stage)
        if (current_index !== -1) {
            if (current_index != 0) {
                set_suit_build_params({ "select": (steps[current_index - 1]) })
            }
        } else {
            set_suit_build_params({ "select": "fabric" })
        }
    }


    return (
        <>
            <Header
                btn_class="sm:hidden"
            >
                <Link to="/">
                    <FullSVGLogo />
                </Link>
            </Header>
            <SuitBuildWrapper
                pictures={pictures}
                detail_id={detail_id}
                next_fn={handleNext}
                back_fn={handlePrev}
                select_stage={select_stage}

            >
                {
                    is_loading &&
                    <div className="fixed z-[1000] w-screen h-screen inset-0 bg-black/20 backdrop-blur-[1px]
                flex justify-center items-center">
                        <Spinner />
                    </div>
                }

                {
                    select_stage == "fabric" &&
                    <SelectFabric
                        set_pictures={set_pictures}
                        set_detail_id={set_detail_id}
                        suit={suit_data}
                    />
                }
                {
                    select_stage == "blazer" &&
                    <SelectBlazerPattern
                        set_pictures={set_pictures}
                        set_detail_id={set_detail_id}
                        suit={suit_data}
                    />
                }
                {
                    select_stage == "waistcoat_pattern" &&
                    <SelectWaistcoatPattern
                        set_pictures={set_pictures}
                        set_detail_id={set_detail_id}
                        suit={suit_data}
                    />
                }
                {
                    select_stage == "waistcoat_lapel" &&
                    <SelectWaistcoatLapel
                        set_pictures={set_pictures}
                        set_detail_id={set_detail_id}
                        suit={suit_data}
                    />
                }
                {
                    select_stage == "pant_style" &&
                    <SelectPantStyle
                        set_pictures={set_pictures}
                        set_detail_id={set_detail_id}
                        suit={suit_data}
                    />
                }
                {
                    select_stage == "shirt_color" &&
                    <SelectShirtColor
                        set_pictures={set_pictures}
                        set_detail_id={set_detail_id}
                        suit={suit_data}
                    />
                }
                {
                    select_stage == "monogram" &&
                    <Monogram
                        set_pictures={set_pictures}
                        set_detail_id={set_detail_id}
                        suit={suit_data}
                        set_monogram_text={set_monogram_text}
                    />
                }
            </SuitBuildWrapper>
        </>
    )
}