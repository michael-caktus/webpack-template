#!/usr/bin/env bash
RED='\033[0;31m'
GREEN='\033[1;32m'
BLUE='\033[1;36m'
NOCOLOR='\033[0m'
DIR_TEST='node_modules'

if [ "$1" != "" ]; then

    if [ -d "$DIR_TEST" ]; then
        printf "${RED}This project looks like it has already been initialized! \n"
        read -r -p "Are you sure you want to continue? You might lose data... [y/N]" RESPONSE
        case "$RESPONSE" in
            [yY][eE][sS]|[yY])
                ;;
            *)
                printf "Aborted \n"
                exit 0
                ;;
        esac
    fi

    printf "${GREEN}Installing npm dependencies...${NOCOLOR} \n"
    rm -rf node_modules/
    npm i

    printf "${GREEN}Removing references to template git repository...${NOCOLOR} \n"
    rm -rf .git

    # TODO: do more stuff here?

    echo ""
    echo ""
    printf "${GREEN}Don't forget to change ${BLUE}\`\"name\": \"data_vis_template\"\` ${GREEN}to ${BLUE}\`\"name\": \"$1\"\` ${GREEN}in package.json!${NOCOLOR} \n"
    echo ""
    echo ""
    exit 0
else
    printf "${RED}Please include your project name as an argument${NOCOLOR}\n"
    printf "e.g. ${GREEN}'npm run initialize my_new_project'${NOCOLOR}\n"
    exit 1
fi
