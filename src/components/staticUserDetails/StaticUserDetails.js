export default function StaticUserDetails({location: state}) {
    return (
        <div>
            {
                JSON.stringify(state)
            }

        </div>
    );
}