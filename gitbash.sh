#while getopts u: flag
#do
#    # shellcheck disable=SC2220
#    case "${flag}" in
#        u) username=${OPTARG};;
#    esac
#done
git add .
git commit -m "$1"
git push