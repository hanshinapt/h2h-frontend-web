import axios from "axios";

interface requestProps {
    method: string;
    url?: string;
    params?: object;
    reqData?: object;
}

const prefix =
    "http://ec2-18-222-196-33.us-east-2.compute.amazonaws.com:8080/api/v1";

export const request = async ({
    method,
    url,
    params,
    reqData,
}: requestProps) => {
    return axios({
        method,
        url: `${prefix}/${url}`,
        params,
        data: reqData,
    })
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
};
