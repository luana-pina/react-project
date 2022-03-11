import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  FormLabel,
  GameCard,
  Input,
  Layout,
  NotFoundGames,
} from "../../components";
import { IAccountResponse } from "../../shared/interfaces/UserInterfaces";
import user from "../../shared/services/user";
import { stringToArray } from "../../shared/utils/stringToArray";
import {
  AreaButtons,
  CancelButton,
  EditIcon,
  EmailArea,
  GamesArea,
  GamesAreaTitle,
  NameArea,
  PageContent,
  ProfileImg,
  SaveButton,
} from "./styles";

const Account: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [userAccount, setUserAccount] = useState<IAccountResponse>();
  const { getAccount, updateUser } = user();
  const { handleSubmit, register, reset } = useForm();
  let isValid = false;

  async function onSave(inputValues: { email: string; name: string }) {
    const requestPopup = toast.loading("Saving...", {
      position: toast.POSITION.TOP_CENTER,
    });
    await isValidInputs(requestPopup, inputValues);
    if (isValid) {
      let bodyRequest = {};
      if (inputValues.email) {
        bodyRequest = { ...bodyRequest, email: inputValues.email };
      }
      if (inputValues.name) {
        bodyRequest = { ...bodyRequest, name: inputValues.name };
      }
      try {
        await updateUser(bodyRequest).then(() => {
          setIsDisabled(true);
          setIsChanged(false);
          toast.update(requestPopup, {
            render: "User updated successfully",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
        });
      } catch (error) {
        if (`${error}`.match("400")) {
          toast.update(requestPopup, {
            render: "Email already exists",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        } else {
          toast.update(requestPopup, {
            render: "Request to failed!",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        }
      }
    }
  }

  async function isValidInputs(
    popup: any,
    inputValues: { name: string; email: string }
  ) {
    const schema = yup.object().shape({
      email: yup.string().email("Please enter a valid email"),
      name: yup
        .string()
        .min(3, "Please enter a valid name! (3 or more letters)"),
    });
    await schema
      .validate(inputValues)
      .then(() => {
        isValid = true;
      })
      .catch((err) => {
        toast.update(popup, {
          render: err.message,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
        isValid = false;
      });
  }

  useEffect(() => {
    async function getUserAccount() {
      await getAccount()
        .then(({ data }) => {
          setUserAccount(data);
          reset({ email: data.email, name: data.name });
        })
        .catch((error) => {
          toast.error("Request to failed!", {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getUserAccount();
  }, [isDisabled]);

  const games = userAccount?.bets || [];

  return (
    <Layout>
      <PageContent>
        <ProfileImg
          src={"https://sindag.org.br/wp-content/uploads/2020/06/user.png"}
        />
        <NameArea>
          <FormLabel
            label="Name:"
            inputId="name"
            style={{ fontSize: "22px", justifyContent: "center" }}
          >
            <Input
              type="text"
              id="name"
              style={{
                maxWidth: "400px",
                height: "1.3rem",
                marginLeft: "3rem",
              }}
              {...register("name")}
              isBlocked={isDisabled}
              disabled={isDisabled ? true : false}
              defaultValue={userAccount?.name}
              onChange={() => {
                setIsChanged(true);
              }}
            />
          </FormLabel>
        </NameArea>
        <EmailArea>
          <FormLabel
            label="Email:"
            inputId="email"
            style={{ fontSize: "22px", justifyContent: "center" }}
          >
            <Input
              type="text"
              id="email"
              style={{
                maxWidth: "400px",
                height: "1.3rem",
                marginLeft: "3rem",
              }}
              {...register("email")}
              isBlocked={isDisabled}
              disabled={isDisabled ? true : false}
              defaultValue={userAccount?.email}
              onChange={() => {
                setIsChanged(true);
              }}
            />
          </FormLabel>
        </EmailArea>
        {isDisabled && (
          <EditIcon
            color="#9d9d9d"
            size={22}
            onClick={() => setIsDisabled(false)}
          />
        )}
        <GamesAreaTitle>Yours games:</GamesAreaTitle>
        <GamesArea>
          {!loading && games.length > 0 ? (
            userAccount?.bets.map((item) => {
              const { id, choosen_numbers, price, game_id } = item;
              return (
                <GameCard
                  key={item.id}
                  item={{
                    id,
                    choosen_numbers: stringToArray(choosen_numbers),
                    price,
                    type: { id: game_id },
                  }}
                />
              );
            })
          ) : (
            <NotFoundGames />
          )}
        </GamesArea>
        {!isDisabled && (
          <AreaButtons>
            <SaveButton
              onClick={handleSubmit((data: any) => {
                onSave(data);
              })}
              isBlocked={!isChanged}
              disabled={isChanged ? false : true}
            >
              Save
            </SaveButton>
            <CancelButton
              onClick={() => {
                setIsChanged(false);
                setIsDisabled(true);
              }}
            >
              Cancel
            </CancelButton>
          </AreaButtons>
        )}
      </PageContent>
    </Layout>
  );
};

export default Account;
