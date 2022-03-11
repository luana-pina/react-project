import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormLabel, GameCard, Input, Layout } from "../../components";
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
  const [loading, setLoading] = useState<boolean>(true);
  const [userAccount, setUserAccount] = useState<IAccountResponse>();
  const { getAccount } = user();

  useEffect(() => {
    async function getUserAccount() {
      await getAccount()
        .then(({ data }) => {
          console.log(data);
          setUserAccount(data);
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
  }, []);

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
              isBlocked={isDisabled}
              disabled={isDisabled ? true : false}
              defaultValue={userAccount?.name}
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
              isBlocked={isDisabled}
              disabled={isDisabled ? true : false}
              defaultValue={userAccount?.email}
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
          {!loading &&
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
            })}
        </GamesArea>
        {!isDisabled && (
          <AreaButtons>
            <SaveButton
              onClick={() => {
                setIsDisabled(true);
              }}
            >
              Save
            </SaveButton>
            <CancelButton
              onClick={() => {
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
