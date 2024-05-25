namespace Identification.Models
{
    public class Marks
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int? ScoreIn1 { get; set; }
        public int? ScoreIn2 { get; set; }
        public int? ScoreIn3 { get; set; }
        public int? ScoreIn4 { get; set; }
        public int? ScoreIn5 { get; set; }
        public int? ScoreIn6 { get; set; }
        public int? ScoreIn7 { get; set; }
        public int? ScoreIn8 { get; set; }
        public int? ScoreIn9 { get; set; }
        public int? ScoreIn10 { get; set; }
        public int? Average { get; set; }

        public ApplicationUser User { get; set; }
    }
}
